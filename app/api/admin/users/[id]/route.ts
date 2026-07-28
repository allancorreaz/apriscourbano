import { isRole } from "../../../../access-control";
import {
  AdminAccessError,
  requireActor,
  updateUser,
} from "../../../../admin-service";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const actor = await requireActor("users.manage");
    const { id } = await context.params;
    const numericId = Number(id);
    if (!Number.isInteger(numericId)) {
      throw new AdminAccessError("Usuário inválido.", 400);
    }
    const input = (await request.json()) as {
      role?: unknown;
      status?: unknown;
    };
    const role =
      input.role === undefined
        ? undefined
        : isRole(input.role)
          ? input.role
          : null;
    if (role === null) {
      throw new AdminAccessError("Perfil de acesso inválido.", 400);
    }
    const status =
      input.status === undefined
        ? undefined
        : input.status === "ACTIVE" || input.status === "INACTIVE"
          ? input.status
          : null;
    if (status === null) {
      throw new AdminAccessError("Status inválido.", 400);
    }

    const user = await updateUser(actor, numericId, { role, status });
    return Response.json({ user });
  } catch (error) {
    const status = error instanceof AdminAccessError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Não foi possível alterar o usuário.";
    return Response.json({ error: message }, { status });
  }
}


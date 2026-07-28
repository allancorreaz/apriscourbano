import { isRole } from "../../../access-control";
import {
  AdminAccessError,
  createUser,
  requireActor,
} from "../../../admin-service";

export async function POST(request: Request) {
  try {
    const actor = await requireActor("users.manage");
    const input = (await request.json()) as {
      name?: string;
      email?: string;
      role?: unknown;
    };
    if (!isRole(input.role)) {
      throw new AdminAccessError("Perfil de acesso inválido.", 400);
    }
    const user = await createUser(actor, {
      name: input.name ?? "",
      email: input.email ?? "",
      role: input.role,
    });
    return Response.json({ user }, { status: 201 });
  } catch (error) {
    const status = error instanceof AdminAccessError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Não foi possível criar o usuário.";
    return Response.json({ error: message }, { status });
  }
}


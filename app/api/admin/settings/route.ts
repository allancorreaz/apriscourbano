import {
  AdminAccessError,
  requireActor,
  updateSettings,
} from "../../../admin-service";

export async function PATCH(request: Request) {
  try {
    const actor = await requireActor("content.manage");
    const input = (await request.json()) as Record<string, string>;
    await updateSettings(actor, input);
    return Response.json({ ok: true });
  } catch (error) {
    const status = error instanceof AdminAccessError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Não foi possível salvar o conteúdo.";
    return Response.json({ error: message }, { status });
  }
}


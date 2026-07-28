import {
  AdminAccessError,
  deleteMedia,
  requireActor,
} from "../../../../admin-service";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const actor = await requireActor("media.manage");
    const { id } = await context.params;
    const numericId = Number(id);
    if (!Number.isInteger(numericId)) {
      throw new AdminAccessError("Vídeo inválido.", 400);
    }
    await deleteMedia(actor, numericId);
    return Response.json({ ok: true });
  } catch (error) {
    const status = error instanceof AdminAccessError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Não foi possível excluir o vídeo.";
    return Response.json({ error: message }, { status });
  }
}


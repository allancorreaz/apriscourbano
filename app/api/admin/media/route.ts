import {
  AdminAccessError,
  createMedia,
  requireActor,
} from "../../../admin-service";

export async function POST(request: Request) {
  try {
    const actor = await requireActor("media.manage");
    const input = (await request.json()) as {
      title?: string;
      description?: string;
      url?: string;
      thumbnailUrl?: string;
      mediaType?: string;
      status?: "PUBLISHED" | "DRAFT";
      featured?: boolean;
    };
    const media = await createMedia(actor, {
      title: input.title ?? "",
      description: input.description,
      url: input.url ?? "",
      thumbnailUrl: input.thumbnailUrl,
      mediaType: input.mediaType,
      status: input.status,
      featured: input.featured,
    });
    return Response.json({ media }, { status: 201 });
  } catch (error) {
    const status = error instanceof AdminAccessError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Não foi possível publicar o vídeo.";
    return Response.json({ error: message }, { status });
  }
}


import { AdminAccessError, getAdminState, requireActor } from "../../../admin-service";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const actor = await requireActor("dashboard.view");
    return Response.json(await getAdminState(actor));
  } catch (error) {
    const status = error instanceof AdminAccessError ? error.status : 500;
    const message =
      error instanceof Error ? error.message : "Não foi possível carregar os dados.";
    return Response.json({ error: message }, { status });
  }
}


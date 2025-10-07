import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function generarVenta(userId, items) {
  const { data, error } = await supabase.rpc("generar_venta", {
    p_user_id: userId,
    p_items: JSON.stringify(items),
  });

  if (error) {
    console.error("Error generando venta:", error);
    return { success: false, error };
  }

  return { success: true, saleId: data };
}

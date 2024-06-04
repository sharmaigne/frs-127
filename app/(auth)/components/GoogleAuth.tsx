import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/icons/google";
import { createClient } from "@/utils/supabase/client";

const GoogleAuth = () => {
  const data_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const handleLoginWithGoogle = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/callback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    console.log(error && data);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLoginWithGoogle}
      className="w-full mt-4"
      id="g_id_onload"
      data-client_id={data_client_id}
      data-context="signin"
      data-ux_mode="popup"
      data-callback="handleSignInWithGoogle"
      data-nonce=""
      data-auto_select="true"
      data-itp_support="true"
      asChild
    >
      <div className="flex gap-4">
        <GoogleIcon className="w-5" />
        <p> Log In with Google</p>
      </div>
    </Button>
  );
};

export default GoogleAuth;

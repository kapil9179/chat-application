import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "375098381487-dib7vsba7e55au6jc37742qeq3tkk88q.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div
        style={{ maxWidth: "100vw", overflowX: "hidden", overflowY: "hidden" }}
      >
        <Messanger />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

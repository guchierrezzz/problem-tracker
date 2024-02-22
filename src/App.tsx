import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Loading } from "./components/general/Loading";
import { RoutesMain } from "./routes/Routes";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? <Loading /> : <RoutesMain />}
    </>
  );
}

export default App;

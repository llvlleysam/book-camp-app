import { Suspense } from "react";
import { AppRouting } from "./routes/index.routes";

function App() {
  return (
    <Suspense fallback={<>loading....</>}>
      <AppRouting />
    </Suspense>
  );
}

export default App;

import { Suspense } from "react";
import Success from "@/components/src/components/Shop/Success";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Success />
    </Suspense>
  );
}

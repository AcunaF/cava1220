import Link from "next/link";

export default function usuario() {
  return (
    <div>
      <div className="m-10">
        <h1>cuenta usuario</h1>
      </div>
      <Link className="ml-10" href="/distribuidora">
        Ir a Distribuidora
      </Link>
    </div>
  );
}

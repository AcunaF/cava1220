'use client'
import { useState } from "react";
import Link from "next/link";
import "./style.css"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const signInResponse = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (signInResponse?.error) {
      setError(signInResponse.error);
    } else {
      router.push("/");  
    }
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      console.log("Sesión cerrada correctamente.");
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div>
      {!session ? (
        <form className="m-5 login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra error */}

          <div>
            <button type="submit">Iniciar sesión</button>
          </div>
          <Link href="/contacto">
            No tienes cuenta? Regístrate <b>Aquí</b>
          </Link>
        </form>
      ) : (
        <div className="m-5">
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

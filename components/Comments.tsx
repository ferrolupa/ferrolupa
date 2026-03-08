"use client";
import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db, loginWithGoogle, logout } from "@/lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function Comments({ pageId }: { pageId: string }) {
  const [user, setUser] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  // Detectar login / logout
useEffect(() => {
  return onAuthStateChanged(auth, (u) => {
    setUser(u);
  });
}, []);


  // Traer comentarios en tiempo real
  useEffect(() => {
    const ref = collection(db, "comments", pageId, "items");
    const q = query(ref, orderBy("timestamp", "desc"));

    return onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [pageId]);

  // Publicar comentario
const publish = async () => {
  if (!text.trim()) return;

  const displayName =
    user?.displayName || user?.providerData?.[0]?.displayName || name.trim() || "Anónimo";

  const avatar =
    user?.photoURL || user?.providerData?.[0]?.photoURL || null;

  await addDoc(collection(db, "comments", pageId, "items"), {
    text,
    name: displayName,
    avatar,
    userId: user ? user.uid : null,
    timestamp: serverTimestamp(),
  });

  setText("");
  setName("");
};


  return (
    <div className="mt-8">

      <h3 className="text-xl font-semibold text-ferroverde mb-4">
        Comentarios
      </h3>

      {/* LOGIN O INFO DEL USUARIO */}
      {!user && (
<button
  onClick={loginWithGoogle}
  className="mb-4 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition flex items-center gap-3 shadow-sm"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google logo"
    className="w-5 h-5"
  />
  <span className="text-gray-700 font-medium">Ingresar con Google</span>
</button>

      )}

      {user && (
        <div className="mb-4 flex items-center gap-3">
          <img
  src={
    user?.photoURL ??
    user?.providerData?.[0]?.photoURL ??
    "/avatar-default.png"
  }
  className="w-8 h-8 rounded-full object-cover bg-gray-200"
  alt="avatar"
  onError={(e) => {
    (e.currentTarget as HTMLImageElement).src = "/avatar-default.png";
  }}
/>

          <span className="font-medium">{user.displayName}</span>

          <button
            onClick={logout}
            className="ml-4 text-sm text-gray-500 underline"
          >
            Cerrar sesión
          </button>
        </div>
      )}

{/* FORM DE COMENTARIO */}
<div className="mb-6 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

  {/* Nombre si no está logueado */}
  {!user && (
    <input
      type="text"
      placeholder="Tu nombre o Ingresar con Google"
      className="w-full p-2 mb-2 border rounded-lg"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )}

  {/* Texto del comentario */}
  <textarea
    placeholder="Dejanos tu comentario..."
    className="w-full p-3 border rounded-lg h-24"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />

  {/* BOTÓN A LA DERECHA */}
  <div className="flex justify-end mt-2">
    <button
      onClick={publish}
      className="px-4 py-2 bg-ferroverde text-white rounded-lg hover:bg-ferroverde/90 transition"
    >
      Publicar
    </button>
  </div>

</div>


      {/* LISTA DE COMENTARIOS */}
      <div className="space-y-4">
{comments.map((c) => {
  // QUIÉN PUEDE ELIMINAR:
  // 1) El autor del comentario
  // 2) El administrador (vos)
  const canDelete =
    (user && user.uid === c.userId) ||
    (user && user.uid === "zIt4DMAuOwSR5PE6t6qM5BTzTvr1");

  return (
    <div key={c.id} className="border-b border-gray-200 pb-3">
      <div className="flex justify-between items-center mb-1">

        {/* NOMBRE + AVATAR */}
        <div className="flex items-center gap-2">
          {c.avatar && <img src={c.avatar} className="w-6 h-6 rounded-full" />}
          <span className="font-medium">{c.name}</span>
        </div>

        {/* BOTÓN ELIMINAR */}
        {canDelete && (
          <button
            onClick={() =>
              deleteDoc(doc(db, "comments", pageId, "items", c.id))
            }
            className="text-xs text-red-500 hover:text-red-700 transition"
          >
            eliminar
          </button>
        )}

      </div>

      {/* TEXTO DEL COMENTARIO */}
      <p className="text-gray-800">{c.text}</p>
    </div>
  );
})}

      </div>

    </div>
  );
}

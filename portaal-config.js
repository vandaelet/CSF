/* =====================================================================
   KOPPELING MET FIREBASE (digitaal logboek en dashboard)
   Deze gegevens zijn niet geheim: de beveiliging zit in firestore.rules.
   Zolang firebaseConfig op null staat, werkt de site zonder logboek
   (de projecten blijven gewoon zichtbaar).
   Stappen om dit in te vullen: zie LEESMIJ.md, deel ‘Firebase koppelen’.
   ===================================================================== */
CSF.firebaseConfig = {
  apiKey: "AIzaSyDx-0C1zs2f9p-b9pxpuiNSNvQrHdFYls8",
  authDomain: "campus-lievegem-csf.firebaseapp.com",
  projectId: "campus-lievegem-csf",
  storageBucket: "campus-lievegem-csf.firebasestorage.app",
  messagingSenderId: "277034116240",
  appId: "1:277034116240:web:ce91bf2f7c66bfdcc82415"
};
/* Voorbeeld van hoe het eruitziet na het invullen:
CSF.firebaseConfig = {
  apiKey: "…",
  authDomain: "campus-lievegem-csf.firebaseapp.com",
  projectId: "campus-lievegem-csf",
  storageBucket: "campus-lievegem-csf.firebasestorage.app",
  messagingSenderId: "…",
  appId: "…"
};
*/
CSF.domein = "svsl.be";   /* enkel schoolaccounts */

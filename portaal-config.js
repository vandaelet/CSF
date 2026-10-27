/* =====================================================================
   KOPPELING MET FIREBASE (digitaal logboek en dashboard)
   Deze gegevens zijn niet geheim: de beveiliging zit in firestore.rules.
   Zolang firebaseConfig op null staat, werkt de site zonder logboek
   (de projecten blijven gewoon zichtbaar).
   Stappen om dit in te vullen: zie LEESMIJ.md, deel ‘Firebase koppelen’.
   ===================================================================== */
CSF.firebaseConfig = null;
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

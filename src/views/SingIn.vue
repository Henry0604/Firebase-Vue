<script setup>
import { ref } from 'vue';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const auth = getAuth();

const register = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Ingreso Exitoso");

            console.log(auth.currentUser);

            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Correo Invalido";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "El correo con esa cuenta no ha sido encontrado";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Contraseña incorrecta"
                    break;
                default:
                    errMsg.value = "Correo o Contraseña son Incorrectos";
                    break;
            }
        });
};
const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/feed");
        })
        .catch((error) => {

        });
};
</script>

<template>
    <br/><br/><br/><br/><br/><br/>
    <h1 class="titulo">Ingresa a tu cuenta</h1>
    <br/><br/>
    <div class="form">
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="register" class="btn btn-outline-success">Ingresa</button></p>
        <p><button @click="singInWithGoogle" class="btn btn-outline-info">Ingresa con Google</button></p>
    </div>
</template>

<style scoped>
.form {
    text-align: center;
}

.titulo {
    text-align: center;
    margin-top: 20px;
}
</style>
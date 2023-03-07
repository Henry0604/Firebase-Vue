<script setup>
import { ref } from 'vue';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const router = useRouter()
const auth = getAuth();


const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Registro Exitoso");

            console.log(auth.currentUser);

            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
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
    <h1 class="titulo">Crear Cuenta</h1>
    <br/><br/>
    <div class="form">
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register" class="btn btn-outline-success">Crear</button></p>
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
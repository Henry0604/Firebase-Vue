<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
});

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/");
    });
};

</script>

<template>
    <!--Barra de Navegacion-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Point Of Sale</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" to="/">Business</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sellers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <!--Botones de Registro-->
                <router-link to="/" class="btn btn-outline-secondary">Home</router-link>
                <router-link to="/feed" class="btn btn-outline-info">Fedd</router-link>
                <router-link to="/register" class="btn btn-outline-warning" >Register</router-link>
                <router-link to="/sign-in" class="btn btn-outline-success" >Login</router-link>
                <button @click="handleSignOut" class="btn btn-outline-danger" v-if="isLoggedIn">Cerrar Sesion</button>
            </div>
        </div>
    </nav>

    <RouterView />


   
</template>

<style>

.uno{
    color: white;
}
</style>
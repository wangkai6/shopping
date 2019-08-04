<template>
    <div class="box">
        <header class="header">
            <Header></Header>
        </header>
        <main class="main">
            <Main>
            </Main>
        </main>
        <footer class="footer">
            <Footer>

            </Footer>
        </footer>
    </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
export default {
    data(){
        return {

        }
    },
    components : {
        Header, Footer, Main
    }
}
</script>
<style>
    .box{
        display:flex;
        flex-direction: column;
    }
    .main{
        flex:1;
        overflow:auto;
    }
</style>
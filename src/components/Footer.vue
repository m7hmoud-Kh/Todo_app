<template>
    <footer>
        <div>
            <p class="lead">developer by mahmoud khairy <span class="heart">❤</span> </p>
        </div>
        <div class="social">
            <a class="facabook" href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" >
                <em class="fab fa-facebook-square"></em>
            </a>
            <a class="linkedin" href="https://www.linkedin.com/in/m7moud-khairy/" target="_blank" >
                <em class="fab fa-linkedin"></em>
            </a>
            <a class="github" href="https://github.com/m7hmoud-Kh" target="_blank" >
                <em class="fab fa-github-square"></em>
            </a>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style>
    footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: #007bff;
        padding-top: 6px;
        height: 100px;
        align-items: center;

    }
    footer div {
        width: 50%;
        align-items: center;
    }
    footer div p {
        text-align: center;
        text-transform: capitalize;
        color: white;
    }
    footer .heart {
        color: #f00;
    }
    footer .social {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap:3px;
        align-items: center;
        justify-content: center;
    }
    footer .social a {
        font-size: 20px;
        padding: 3px;
        color: white;
        transition: 0.55s;
    }
    footer .social a:hover {
        color: #000;
        transform: translateY(-3px)
    }
</style>
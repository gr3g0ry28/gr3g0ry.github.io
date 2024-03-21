onload = () =>{
        document.body.classList.remove("container");
        function reproducirAudio() {
        var miAudio = document.getElementById('miAudio');
        document.addEventListener('click', function() {
                miAudio.play();
        });
        }
        reproducirAudio();
};

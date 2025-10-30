let clicked = false
        document.getElementById('register-client').addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío tradicional del formulario
            // COPIA AQUÍ LA URL COMPLETA DE TU APPS SCRIPT
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxMMYRpJp4iNoQLtEPt3bHsGtx3LEtr9fhcKc5_bjghjgQaxNtQrIXPhCpTs03yAH7gWA/exec'; 
            
            const form = document.getElementById('register-client');
            const formData = new FormData(form);

            // Convertir FormData a URLSearchParams para enviarlo como POST
            const data = new URLSearchParams(formData);
            if(clicked == false){
                clicked = true
                fetch(scriptURL, {
                method: 'POST',
                body: data
                })
                .then(response => response.json()) // Procesar la respuesta del script
                .then(data => {
                    if (data.result === 'success') {
                        alert('¡Gracias! Tu información ha sido enviada.');
                        form.reset();
                    } else {
                        alert('Hubo un error al enviar la información.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Hubo un problema de conexión.');
                });
            }
            
        });
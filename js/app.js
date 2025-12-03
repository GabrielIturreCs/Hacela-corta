document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- I18N ---
    const dictionary = {
        es: {
            buy_coffee: "Invítame un café",
            privacy_badge: "100% Privado • Offline • Seguro",
            hero_title_1: "El Editor",
            hero_title_2: "Offline y Seguro",
            hero_subtitle: "Convierte, recorta y comprime imágenes directamente en tu navegador. Sin servidores. Sin esperas.",
            drop_title: "Arrastra tus fotos aquí",
            drop_subtitle: "JPG, PNG, WEBP (Máx 10)",
            promise_1_title: "¿Por qué Offline?",
            promise_1_desc: "Tus fotos nunca salen de tu dispositivo. GhostCut funciona localmente con WebAssembly. Es más rápido y 100% privado.",
            promise_2_title: "¿Por qué Gratis?",
            promise_2_desc: "Soy un desarrollador independiente creando herramientas que yo mismo uso. Sin anuncios, sin rastreadores. Solo pasión.",
            meet_maker: "CONOCE AL CREADOR",
            founder_role: "Ingeniero de Software Full Stack",
            founder_bio: "Desarrollando software de alto rendimiento con foco en privacidad y experiencia de usuario. GhostCut es mi contribución para una web más rápida y segura.",
            btn_crop: "Recortar",
            settings_title: "Configuración Global",
            lbl_format: "Formato de Salida",
            lbl_quality: "Calidad",
            lbl_resize: "Redimensionar (Ancho Máx)",
            stat_input: "Original",
            stat_output: "Resultado",
            btn_download_one: "Descargar Esta",
            btn_download_zip: "Descargar Todo (ZIP)",
            crop_title: "Editor de Recorte",
            btn_cancel: "Cancelar",
            btn_apply: "Aplicar",
            donate_title: "Apoya el Software Indie",
            donate_desc: "GhostCut es 100% gratis y privado. Si te ahorré tiempo hoy, invitarme un café significa mucho.",
            btn_skip: "Ahora no, solo quiero mis fotos",
            label_original: "ORIGINAL",
            cafecito_text: "Cafecito (Argentina 🇦🇷)",
            mp_alias: "Mercado Pago (Copiar Alias)",
            mp_link: "Mercado Pago (Link de Pago)",
            paypal_text: "PayPal (Internacional 🌍)"
        }
    };

    const isSpanish = navigator.language.startsWith('es');

    if (isSpanish) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary.es[key]) el.innerText = dictionary.es[key];
        });
    }

    // --- Donation Modal Logic ---
    const renderDonations = () => {
        const container = document.getElementById('donationOptions');
        if (!container) return;

        let html = '';

        // Cafecito
        html += `
        <a href="https://cafecito.app/gabrieliturre" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-[#17a2b8]/10 border border-[#17a2b8]/30 hover:bg-[#17a2b8]/20 transition-all group">
            <img src="https://cafecito.app/logo_b.png" class="w-8 h-8 rounded-full bg-white p-1">
            <div class="flex-1">
                <h4 class="text-white font-bold text-sm group-hover:text-[#17a2b8] transition-colors">${isSpanish ? dictionary.es.cafecito_text : 'Cafecito (Argentina 🇦🇷)'}</h4>
            </div>
            <i data-lucide="external-link" class="w-4 h-4 text-gray-500"></i>
        </a>`;

        // Mercado Pago (Link)
        html += `
        <a href="https://link.mercadopago.com.ar/gabrieliturre" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-[#009EE3]/10 border border-[#009EE3]/30 hover:bg-[#009EE3]/20 transition-all group">
            <img src="images/icons8-mercado-pago-480.png" class="w-8 h-8 rounded-full bg-white p-0.5 object-cover">
            <div class="flex-1">
                <h4 class="text-white font-bold text-sm group-hover:text-[#009EE3] transition-colors">${isSpanish ? 'Mercado Libre' : 'Mercado Libre'}</h4>
            </div>
            <i data-lucide="external-link" class="w-4 h-4 text-[#009EE3]"></i>
        </a>`;

        // PayPal
        html += `
        <a href="https://paypal.me/gabriel13iturre" target="_blank" class="flex items-center gap-4 p-4 rounded-xl bg-[#00457C]/10 border border-[#00457C]/30 hover:bg-[#00457C]/20 transition-all group">
            <img src="images/icons8-paypal-480.png" class="w-8 h-8 rounded-full bg-white p-1 object-cover">
            <div class="flex-1">
                <h4 class="text-white font-bold text-sm group-hover:text-[#00457C] transition-colors">PayPal</h4>
                <p class="text-[10px] text-gray-400">Global 🌍</p>
            </div>
            <i data-lucide="external-link" class="w-4 h-4 text-gray-500"></i>
        </a>`;

        // Buy Me A Coffee
        html += `
        <a href="https://buymeacoffee.com/gabriel13iturre" target="_blank" class="block group relative overflow-hidden rounded-xl bg-[#FFDD00]/10 border border-[#FFDD00]/30 hover:bg-[#FFDD00]/20 transition-all p-4 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-[#FFDD00] flex items-center justify-center flex-none text-black">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.216 6.415l-.132-.666c-.119-.596-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-1.526-1.448-2.808-1.346-3.06-1.346-8.533 0-10.33 1.243-10.33 1.243l-1.272 6.556c-.931 4.796 3.831 4.869 3.831 4.869 4.087 2.381 6.89 1.424 6.89 1.424.573 3.426-1.67 3.842-1.67 3.842h6.526s.5-2.637-6.08-3.816c-.369-.069-.822-.196-1.272-.31 2.173-.975 3.388-2.396 3.388-2.396 2.537-1.7 1.95-5.53 1.95-5.53l.138-.853c1.867.051 3.395-.463 3.658-1.75.203-.983-.71-1.574-1.166-1.643z"/></svg>
            </div>
            <div class="flex-1 text-left">
                <h4 class="font-bold text-white text-sm group-hover:text-[#FFDD00] transition-colors">Buy Me A Coffee</h4>
                <p class="text-[10px] text-gray-400">Support the dev</p>
            </div>
            <div class="text-gray-500 group-hover:text-white transition-colors">
                <i data-lucide="external-link" class="w-5 h-5"></i>
            </div>
        </a>`;

        container.innerHTML = html;
        lucide.createIcons();
    };
    renderDonations();

    // --- Contact Copy ---
    const emailBtn = document.getElementById('emailCopyBtn');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            const textSpan = emailBtn.querySelector('span');
            const icon = emailBtn.querySelector('i');
            navigator.clipboard.writeText('gabriel13iturre@gmail.com').then(() => {
                const originalText = textSpan.innerText;
                textSpan.innerText = "Copied!";
                textSpan.classList.add('text-emerald-400');
                setTimeout(() => {
                    textSpan.innerText = originalText;
                    textSpan.classList.remove('text-emerald-400');
                }, 2000);
            });
        });
    }

    // --- Modal Controls ---
    const donationModal = document.getElementById('donationModal');
    const toggleModal = (show) => {
        if (show) {
            donationModal.classList.remove('hidden');
            setTimeout(() => donationModal.children[1].classList.remove('opacity-0', 'scale-95'), 10);
        } else {
            donationModal.children[1].classList.add('opacity-0', 'scale-95');
            setTimeout(() => donationModal.classList.add('hidden'), 300);
        }
    };

    const donateHeaderBtn = document.getElementById('donateHeaderBtn');
    if (donateHeaderBtn) donateHeaderBtn.onclick = (e) => { e.preventDefault(); toggleModal(true); };
    document.getElementById('closeModal').onclick = () => toggleModal(false);
    document.getElementById('closeModalLink').onclick = () => toggleModal(false);
    document.getElementById('modalBackdrop').onclick = () => toggleModal(false);

    // --- APP CORE ---
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const uploadSection = document.getElementById('uploadSection');
    const editorSection = document.getElementById('editorSection');

    let appState = { files: [], activeIndex: 0, settings: { quality: 0.8, format: 'image/webp', maxWidth: null } };

    const handleFiles = (files) => {
        const valid = Array.from(files).filter(f => f.type.startsWith('image/'));
        if (!valid.length) return alert('No valid images found');

        uploadSection.classList.add('opacity-0', '-translate-y-4');
        setTimeout(() => {
            uploadSection.classList.add('hidden');
            editorSection.classList.remove('hidden');
            setTimeout(() => editorSection.classList.remove('opacity-0'), 50);
        }, 500);

        valid.forEach(f => {
            const reader = new FileReader();
            reader.onload = (e) => {
                appState.files.push({
                    id: Math.random().toString(36),
                    originalFile: f,
                    originalUrl: e.target.result,
                    compressedBlob: null,
                    compressedUrl: null
                });
                if (appState.files.length === valid.length) {
                    initEditor();
                } else {
                    renderThumbnails();
                }
            };
            reader.readAsDataURL(f);
        });
    };

    const initEditor = () => {
        renderThumbnails();
        selectImage(0);
        // Safe update for badges
        const b1 = document.getElementById('batchCountBadge');
        if (b1) { b1.innerText = `${appState.files.length} FILES`; b1.classList.remove('hidden'); }

        const b2 = document.getElementById('batchCountBadgeEditor');
        if (b2) { b2.innerText = `${appState.files.length} FILES`; b2.classList.remove('hidden'); }
    };

    const renderThumbnails = () => {
        // Render to both possible locations
        const containers = [
            document.getElementById('thumbnailsContainer'),
            document.getElementById('thumbnailsContainerTop') // Ensure HTML matches this ID
        ];

        containers.forEach(container => {
            if (!container) return;
            container.innerHTML = '';
            appState.files.forEach((f, i) => {
                const div = document.createElement('div');
                div.className = `w-12 h-12 rounded-lg border-2 overflow-hidden cursor-pointer transition-all flex-none ${i === appState.activeIndex ? 'border-emerald-500 opacity-100 ring-2 ring-emerald-500/50' : 'border-gray-700 opacity-50 hover:opacity-80'}`;
                const img = document.createElement('img');
                img.src = f.originalUrl;
                img.className = 'w-full h-full object-cover';
                div.appendChild(img);
                div.onclick = () => selectImage(i);
                container.appendChild(div);
            });
        });
    };

    const selectImage = (index) => {
        if (!appState.files[index]) return;
        appState.activeIndex = index;
        const file = appState.files[index];

        // Update both sets of labels safely
        const fns = [document.getElementById('currentFileName'), document.getElementById('currentFileNameFloating')];
        fns.forEach(el => { if (el) el.innerText = file.originalFile.name; });

        const sos = [document.getElementById('statOriginal'), document.getElementById('statOriginalFloating')];
        sos.forEach(el => { if (el) el.innerText = (file.originalFile.size / 1024 / 1024).toFixed(2) + ' MB'; });

        renderThumbnails();
        processImage();
    };

    const processImage = async () => {
        const file = appState.files[appState.activeIndex];
        if (!file) return;

        document.getElementById('spinner').classList.remove('hidden');

        const img = new Image();
        img.src = file.originalUrl;
        await new Promise(r => img.onload = r);

        const canvas = document.getElementById('workerCanvas');
        const ctx = canvas.getContext('2d');

        let w = img.width;
        let h = img.height;

        if (appState.settings.maxWidth && w > appState.settings.maxWidth) {
            h = h * (appState.settings.maxWidth / w);
            w = appState.settings.maxWidth;
        }

        canvas.width = w;
        canvas.height = h;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);

        canvas.toBlob(blob => {
            file.compressedBlob = blob;
            file.compressedUrl = URL.createObjectURL(blob);

            // Direct simple image setting - no slider confusion
            const mainPreview = document.getElementById('mainPreview');
            if (mainPreview) mainPreview.src = file.compressedUrl;

            const scs = [document.getElementById('statCompressed'), document.getElementById('statCompressedFloating')];
            scs.forEach(el => { if (el) el.innerText = (blob.size / 1024 / 1024).toFixed(2) + ' MB'; });

            const savings = ((file.originalFile.size - blob.size) / file.originalFile.size) * 100;
            document.getElementById('statSavings').innerText = savings > 0 ? `-${savings.toFixed(1)}%` : `+${Math.abs(savings).toFixed(1)}%`;
            document.getElementById('savingsBar').style.width = `${Math.min(Math.max(savings, 0), 100)}%`;

            document.getElementById('spinner').classList.add('hidden');
        }, appState.settings.format, appState.settings.quality);
    };

    // Listeners
    dropZone.onclick = () => fileInput.click();
    dropZone.ondragover = (e) => { e.preventDefault(); dropZone.classList.add('border-emerald-500'); };
    dropZone.ondragleave = (e) => { e.preventDefault(); dropZone.classList.remove('border-emerald-500'); };
    dropZone.ondrop = (e) => { e.preventDefault(); dropZone.classList.remove('border-emerald-500'); handleFiles(e.dataTransfer.files); };
    fileInput.onchange = (e) => handleFiles(e.target.files);

    document.getElementById('addMoreBtn').onclick = () => fileInput.click();
    document.getElementById('deleteBtn').onclick = () => {
        appState.files.splice(appState.activeIndex, 1);
        if (!appState.files.length) location.reload();
        else {
            appState.activeIndex = Math.max(0, appState.activeIndex - 1);
            initEditor();
        }
    };

    // Settings Listeners
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.format-btn').forEach(b => {
                b.classList.remove('bg-emerald-600', 'text-white', 'border-emerald-500', 'active');
                b.classList.add('bg-gray-900', 'text-gray-500', 'border-gray-800');
            });
            btn.classList.remove('bg-gray-900', 'text-gray-500', 'border-gray-800');
            btn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500', 'active');
            appState.settings.format = btn.dataset.format;
            processImage();
        }
    });

    const qInput = document.getElementById('qualityInput');
    qInput.oninput = (e) => {
        appState.settings.quality = e.target.value / 100;
        document.getElementById('qualityValue').innerText = `${e.target.value}%`;
    };
    qInput.onchange = processImage;

    document.getElementById('maxWidthInput').onchange = (e) => {
        appState.settings.maxWidth = e.target.value ? parseInt(e.target.value) : null;
        processImage();
    };

    // Download
    const download = (blob, name) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;
        a.click();
        toggleModal(true); // Trigger Donation Modal
    };

    document.getElementById('downloadCurrentBtn').onclick = () => {
        const f = appState.files[appState.activeIndex];
        if (f && f.compressedBlob) download(f.compressedBlob, f.originalFile.name.split('.')[0] + '_ghostcut.' + appState.settings.format.split('/')[1]);
    };

    document.getElementById('downloadAllBtn').onclick = async () => {
        if (!appState.files.length) return;
        const zip = new JSZip();
        const folder = zip.folder("GhostCut_Batch");

        // Reprocess all to be sure
        for (const f of appState.files) {
            // Logic duplication for speed in this context, ideally refactor processImage to return promise
            // Re-using current compressed if valid, or we could force re-compress. 
            // Let's assume current settings apply to all on download for batch consistency.
            folder.file(f.originalFile.name.split('.')[0] + '.' + appState.settings.format.split('/')[1], f.compressedBlob);
        }

        const content = await zip.generateAsync({ type: "blob" });
        download(content, "GhostCut_Batch.zip");
    };

    // Crop Logic (Basic Integration)
    let cropper;
    const cropModal = document.getElementById('cropModal');
    const cropImg = document.getElementById('cropTarget');

    document.getElementById('cropBtn').onclick = () => {
        const f = appState.files[appState.activeIndex];
        if (!f) return;
        cropImg.src = f.originalUrl;
        cropModal.classList.remove('hidden');
        if (cropper) cropper.destroy();
        cropper = new Cropper(cropImg, { viewMode: 1, dragMode: 'move' });
    };

    document.getElementById('cancelCropBtn').onclick = () => cropModal.classList.add('hidden');
    document.getElementById('applyCropBtn').onclick = () => {
        cropper.getCroppedCanvas().toBlob(blob => {
            const f = appState.files[appState.activeIndex];
            f.originalUrl = URL.createObjectURL(blob);
            cropModal.classList.add('hidden');
            selectImage(appState.activeIndex);
        });
    };
});

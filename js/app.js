document.addEventListener('DOMContentLoaded', () => {
    // --- I18N SYSTEM ---
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
            label_original: "ORIGINAL"
        }
    };

    const isSpanish = navigator.language.startsWith('es');

    function translateUI() {
        if (!isSpanish) return;
        const t = dictionary.es;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerText = t[key];
        });
    }

    function renderDonationButtons() {
        const container = document.getElementById('donationOptions');
        if (!container) return;
        container.innerHTML = '';

        const copyToClipboard = (text, btnId) => {
            navigator.clipboard.writeText(text).then(() => {
                const btn = document.getElementById(btnId);
                const originalIcon = btn.innerHTML;
                btn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-green-400"></i>';
                lucide.createIcons();
                setTimeout(() => {
                    btn.innerHTML = originalIcon;
                    lucide.createIcons();
                }, 2000);
            });
        };
        window.copyToClipboard = copyToClipboard;

        // 1. Mercado Pago
        container.innerHTML += `
        <div class="block group relative overflow-hidden rounded-xl bg-[#009EE3]/10 border border-[#009EE3]/30 hover:bg-[#009EE3]/20 transition-all p-4 mb-3">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 rounded-full bg-[#009EE3] flex items-center justify-center flex-none text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                </div>
                <div class="flex-1 text-left">
                    <h4 class="font-bold text-white text-sm">Mercado Pago</h4>
                    <p class="text-[10px] text-gray-400">Argentina 🇦🇷</p>
                </div>
                <a href="https://link.mercadopago.com.ar/gabrieliturre" target="_blank" class="px-3 py-1.5 rounded-lg bg-[#009EE3] text-white text-xs font-bold hover:bg-[#008ED0] transition-colors">
                    Abrir App
                </a>
            </div>
            <div class="flex items-center justify-between bg-black/30 rounded-lg p-2 border border-white/5">
                <span class="text-xs text-gray-300 font-mono ml-1">Alias: <span class="text-white font-bold select-all">gabriel.iturre</span></span>
                <button id="btn-copy-mp" onclick="copyToClipboard('gabriel.iturre', 'btn-copy-mp')" class="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                </button>
            </div>
        </div>`;

        // 2. PayPal
        container.innerHTML += `
        <div class="block group relative overflow-hidden rounded-xl bg-[#00457C]/10 border border-[#00457C]/30 hover:bg-[#00457C]/20 transition-all p-4 mb-3">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 rounded-full bg-[#00457C] flex items-center justify-center flex-none text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.05-4.336 6.794-9.067 6.794h-2.14l-2.57 7.278a.64.64 0 0 1-.233.73z"/></svg>
                </div>
                <div class="flex-1 text-left">
                    <h4 class="font-bold text-white text-sm">PayPal</h4>
                    <p class="text-[10px] text-gray-400">International 🌍</p>
                </div>
                <a href="https://paypal.me/gabriel13iturre" target="_blank" class="px-3 py-1.5 rounded-lg bg-[#00457C] text-white text-xs font-bold hover:bg-[#003a65] transition-colors">
                    Send
                </a>
            </div>
            <div class="flex items-center justify-between bg-black/30 rounded-lg p-2 border border-white/5">
                <span class="text-xs text-gray-300 font-mono ml-1">User: <span class="text-white font-bold select-all">@gabriel13iturre</span></span>
                <button id="btn-copy-pp" onclick="copyToClipboard('gabriel13iturre', 'btn-copy-pp')" class="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors">
                    <i data-lucide="copy" class="w-4 h-4"></i>
                </button>
            </div>
        </div>`;

        // 3. Buy Me A Coffee
        container.innerHTML += `
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

        lucide.createIcons();
    }

    // --- APP LOGIC ---
    lucide.createIcons();
    translateUI();
    renderDonationButtons();

    // Founder Copy Email
    const emailBtn = document.getElementById('emailCopyBtn');
    const emailText = document.getElementById('emailText');
    const copyToast = document.getElementById('copyToast');
    if (emailBtn && emailText) {
        emailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText.innerText).then(() => {
                copyToast.classList.remove('opacity-0');
                copyToast.classList.add('toast-active');
                setTimeout(() => {
                    copyToast.classList.remove('toast-active');
                    copyToast.classList.add('opacity-0');
                }, 2000);
            });
        });
    }

    // Elements & Logic (Same as before but wrapped in DOMContentLoaded)
    // ... [Rest of the JS Logic for Drag/Drop, Canvas, Slider, etc.]

    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const uploadSection = document.getElementById('uploadSection');
    const editorSection = document.getElementById('editorSection');
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    const imageBefore = document.getElementById('imageBefore');
    const imageAfter = document.getElementById('imageAfter');
    const overlay = document.getElementById('overlay');
    const compareWrapper = document.getElementById('compareWrapper');
    const sliderHandle = document.getElementById('sliderHandle');

    const qualityInput = document.getElementById('qualityInput');
    const qualityValue = document.getElementById('qualityValue');
    const maxWidthInput = document.getElementById('maxWidthInput');
    const formatBtns = document.querySelectorAll('.format-btn');

    const cropBtn = document.getElementById('cropBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const addMoreBtn = document.getElementById('addMoreBtn');
    const downloadCurrentBtn = document.getElementById('downloadCurrentBtn');
    const downloadAllBtn = document.getElementById('downloadAllBtn');

    let appState = { files: [], activeIndex: 0, settings: { quality: 0.8, format: 'image/webp', maxWidth: null } };

    function handleFiles(fileList) {
        const validFiles = Array.from(fileList).filter(f => f.type.startsWith('image/')).slice(0, 10);
        if (validFiles.length === 0) return alert("Invalid images.");
        uploadSection.classList.add('opacity-0');
        setTimeout(() => {
            uploadSection.classList.add('hidden');
            editorSection.classList.remove('hidden');
            void editorSection.offsetWidth;
            editorSection.classList.remove('opacity-0');
        }, 300);
        let loadedCount = 0;
        validFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                appState.files.push({ id: Date.now() + Math.random(), originalFile: file, originalUrl: e.target.result, compressedBlob: null, compressedUrl: null });
                loadedCount++;
                if (loadedCount === validFiles.length) {
                    if (appState.files.length === validFiles.length) initEditor();
                    else { renderThumbnails(); updateBatchBadge(); }
                }
            };
            reader.readAsDataURL(file);
        });
    }

    function initEditor() { renderThumbnails(); selectImage(0); updateBatchBadge(); }

    function renderThumbnails() {
        if (!thumbnailsContainer) return;
        thumbnailsContainer.innerHTML = '';
        appState.files.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = `min-w-[50px] w-[50px] h-[50px] rounded border border-gray-700 overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-all ${index === appState.activeIndex ? 'opacity-100 border-emerald-500 ring-1 ring-emerald-500' : ''}`;
            const img = document.createElement('img');
            img.src = item.originalUrl;
            img.className = "w-full h-full object-cover";
            div.appendChild(img);
            div.onclick = () => selectImage(index);
            thumbnailsContainer.appendChild(div);
        });
    }

    function selectImage(index) {
        if (!appState.files[index]) return;
        appState.activeIndex = index;
        const currentItem = appState.files[index];
        const fn = document.getElementById('currentFileName');
        if (fn) fn.innerText = currentItem.originalFile.name;
        const so = document.getElementById('statOriginal');
        if (so) so.innerText = formatBytes(currentItem.originalFile.size);
        if (imageBefore) imageBefore.src = currentItem.originalUrl;
        renderThumbnails();
        processCurrent();
    }

    function compressImage(srcUrl, settings) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.getElementById('workerCanvas');
                const ctx = canvas.getContext('2d');
                let w = img.width, h = img.height;
                if (settings.maxWidth && w > settings.maxWidth) {
                    const ratio = settings.maxWidth / w;
                    w = settings.maxWidth;
                    h = h * ratio;
                }
                canvas.width = w; canvas.height = h;
                ctx.clearRect(0, 0, w, h);
                ctx.drawImage(img, 0, 0, w, h);
                canvas.toBlob((blob) => {
                    resolve({ blob: blob || new Blob(), width: w, height: h });
                }, settings.format, settings.quality);
            };
            img.src = srcUrl;
        });
    }

    function processCurrent() {
        const item = appState.files[appState.activeIndex];
        if (!item) return;
        const spinner = document.getElementById('spinner');
        if (spinner) spinner.classList.remove('hidden');
        compressImage(item.originalUrl, appState.settings).then(result => {
            item.compressedBlob = result.blob;
            if (item.compressedUrl) URL.revokeObjectURL(item.compressedUrl);
            item.compressedUrl = URL.createObjectURL(result.blob);
            if (imageAfter) imageAfter.src = item.compressedUrl;
            setTimeout(syncSliderDimensions, 50);
            const sc = document.getElementById('statCompressed');
            if (sc) sc.innerText = formatBytes(result.blob.size);
            const savings = ((item.originalFile.size - result.blob.size) / item.originalFile.size) * 100;
            const isPos = savings > 0;
            const ss = document.getElementById('statSavings');
            if (ss) {
                ss.innerText = isPos ? `-${savings.toFixed(1)}%` : `+${Math.abs(savings).toFixed(1)}%`;
                ss.className = isPos ? "text-[10px] text-emerald-400 font-bold" : "text-[10px] text-red-400 font-bold";
            }
            const sb = document.getElementById('savingsBar');
            if (sb) sb.style.width = Math.min(Math.max(savings, 0), 100) + '%';
            if (spinner) spinner.classList.add('hidden');
        });
    }

    let debounceTimer;
    function debouncedProcess() {
        const spinner = document.getElementById('spinner');
        if (spinner) spinner.classList.remove('hidden');
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(processCurrent, 150);
    }

    function syncSliderDimensions() {
        if (!compareWrapper || !imageBefore) return;
        const containerRect = compareWrapper.getBoundingClientRect();
        imageBefore.style.width = containerRect.width + 'px';
        imageBefore.style.height = containerRect.height + 'px';
        imageBefore.style.maxWidth = 'none';
    }
    window.addEventListener('resize', syncSliderDimensions);

    let isSliding = false;
    const moveSlider = (e) => {
        if (!isSliding) return;
        const rect = compareWrapper.getBoundingClientRect();
        let x = (e.pageX || e.touches[0].pageX) - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const percent = (x / rect.width) * 100;
        overlay.style.width = percent + "%";
        sliderHandle.style.left = percent + "%";
    }
    if (compareWrapper) {
        compareWrapper.addEventListener('mousedown', () => isSliding = true);
        compareWrapper.addEventListener('touchstart', () => isSliding = true);
        window.addEventListener('mouseup', () => isSliding = false);
        window.addEventListener('touchend', () => isSliding = false);
        window.addEventListener('mousemove', moveSlider);
        window.addEventListener('touchmove', moveSlider);
    }

    if (fileInput) fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
    if (dropZone) {
        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('border-emerald-500'); });
        dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.classList.remove('border-emerald-500'); });
        dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('border-emerald-500'); handleFiles(e.dataTransfer.files); });
    }
    if (qualityInput) qualityInput.addEventListener('input', (e) => { appState.settings.quality = parseInt(e.target.value) / 100; if (qualityValue) qualityValue.innerText = e.target.value + '%'; debouncedProcess(); });
    if (maxWidthInput) maxWidthInput.addEventListener('change', (e) => { appState.settings.maxWidth = parseInt(e.target.value) || null; debouncedProcess(); });
    formatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            formatBtns.forEach(b => { b.classList.remove('active', 'bg-emerald-600', 'text-white', 'border-emerald-500'); b.classList.add('bg-gray-900', 'text-gray-500', 'border-gray-800'); });
            btn.classList.remove('bg-gray-900', 'text-gray-500', 'border-gray-800');
            btn.classList.add('active', 'bg-emerald-600', 'text-white', 'border-emerald-500');
            appState.settings.format = btn.dataset.format;
            const lbl = document.getElementById('outputFormatLabel');
            if (lbl) lbl.innerText = appState.settings.format.split('/')[1].toUpperCase();
            debouncedProcess();
        });
    });
    if (addMoreBtn) addMoreBtn.addEventListener('click', () => fileInput.click());
    if (deleteBtn) deleteBtn.addEventListener('click', () => {
        if (appState.files.length === 0) return;
        appState.files.splice(appState.activeIndex, 1);
        if (appState.files.length === 0) location.reload();
        else { appState.activeIndex = Math.max(0, Math.min(appState.activeIndex, appState.files.length - 1)); initEditor(); }
    });

    let cropper;
    const cropModal = document.getElementById('cropModal');
    const cropTarget = document.getElementById('cropTarget');
    if (cropBtn) cropBtn.addEventListener('click', () => {
        if (!appState.files[appState.activeIndex]) return;
        cropTarget.src = appState.files[appState.activeIndex].originalUrl;
        cropModal.classList.remove('hidden');
        if (cropper) cropper.destroy();
        cropper = new Cropper(cropTarget, { viewMode: 1, dragMode: 'move', autoCropArea: 0.9, background: false });
    });
    const cancelCrop = document.getElementById('cancelCropBtn');
    if (cancelCrop) cancelCrop.addEventListener('click', () => cropModal.classList.add('hidden'));
    const applyCrop = document.getElementById('applyCropBtn');
    if (applyCrop) applyCrop.addEventListener('click', () => {
        if (!cropper) return;
        cropper.getCroppedCanvas().toBlob((blob) => {
            const item = appState.files[appState.activeIndex];
            item.originalUrl = URL.createObjectURL(blob);
            item.originalFile = new File([blob], item.originalFile.name, { type: blob.type, lastModified: Date.now() });
            cropModal.classList.add('hidden');
            selectImage(appState.activeIndex);
        });
    });

    if (downloadCurrentBtn) downloadCurrentBtn.addEventListener('click', () => {
        const item = appState.files[appState.activeIndex];
        if (!item || !item.compressedBlob) return;
        saveBlob(item.compressedBlob, item.originalFile.name.split('.')[0] + '_ghostcut.' + appState.settings.format.split('/')[1]);
        setTimeout(() => toggleModal(true), 1000);
    });
    if (downloadAllBtn) downloadAllBtn.addEventListener('click', async () => {
        if (appState.files.length === 0) return;
        const zip = new JSZip();
        const folder = zip.folder("GhostCut_Batch");
        document.getElementById('downloadAllBtn').innerHTML = `<span class="loader w-4 h-4"></span> Processing...`;
        for (let item of appState.files) {
            const res = await compressImage(item.originalUrl, appState.settings);
            folder.file(item.originalFile.name.split('.')[0] + '.' + appState.settings.format.split('/')[1], res.blob);
        }
        const content = await zip.generateAsync({ type: "blob" });
        saveBlob(content, "GhostCut_Batch.zip");
        document.getElementById('downloadAllBtn').innerHTML = `<i data-lucide="archive" class="w-4 h-4"></i> <span data-i18n="btn_download_zip">Download All (ZIP)</span>`;
        setTimeout(() => toggleModal(true), 1000);
    });

    function saveBlob(blob, name) {
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }
    function formatBytes(bytes) {
        if (bytes === 0) return '0 B';
        const sizes = ['B', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
    }
    function updateBatchBadge() {
        const b = document.getElementById('batchCountBadge');
        if (b) { b.innerText = `${appState.files.length} FILES`; b.classList.remove('hidden'); }
    }

    // Modal Logic
    const donationModal = document.getElementById('donationModal');
    const modalContent = document.getElementById('modalContent');
    const toggleModal = (show) => {
        if (show && donationModal && modalContent) {
            donationModal.classList.remove('hidden');
            setTimeout(() => modalContent.classList.remove('opacity-0', 'scale-95'), 10);
        } else if (donationModal && modalContent) {
            modalContent.classList.add('opacity-0', 'scale-95');
            setTimeout(() => donationModal.classList.add('hidden'), 200);
        }
    };
    const donateHeaderBtn = document.getElementById('donateHeaderBtn');
    if (donateHeaderBtn) donateHeaderBtn.onclick = () => toggleModal(true);
    const closeModal = document.getElementById('closeModal');
    if (closeModal) closeModal.onclick = () => toggleModal(false);
    const closeModalLink = document.getElementById('closeModalLink');
    if (closeModalLink) closeModalLink.onclick = () => toggleModal(false);
    const modalBackdrop = document.getElementById('modalBackdrop');
    if (modalBackdrop) modalBackdrop.onclick = () => toggleModal(false);
});

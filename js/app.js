lucide.createIcons();

// --- DOM Elements ---
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
const aiLoader = document.getElementById('aiLoader');
const aiLoaderText = document.getElementById('aiLoaderText');
const qualityInput = document.getElementById('qualityInput');
const qualityValue = document.getElementById('qualityValue');
const maxWidthInput = document.getElementById('maxWidthInput');
const formatBtns = document.querySelectorAll('.format-btn');
const outputFormatLabel = document.getElementById('outputFormatLabel');
const cropBtn = document.getElementById('cropBtn');
const bgRemoveBtn = document.getElementById('bgRemoveBtn');
const deleteBtn = document.getElementById('deleteBtn');
const statOriginal = document.getElementById('statOriginal');
const statCompressed = document.getElementById('statCompressed');
const statSavings = document.getElementById('statSavings');
const savingsBar = document.getElementById('savingsBar');
const spinner = document.getElementById('spinner');
const currentFileName = document.getElementById('currentFileName');
const currentIdxDisplay = document.getElementById('currentIdxDisplay');
const batchCountBadge = document.getElementById('batchCountBadge');
const downloadCurrentBtn = document.getElementById('downloadCurrentBtn');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const addMoreBtn = document.getElementById('addMoreBtn');
const zipProgress = document.getElementById('zipProgress');
const zipProgressBar = document.getElementById('zipProgressBar');
const donationModal = document.getElementById('donationModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const closeModalLink = document.getElementById('closeModalLink');
const modalBackdrop = document.getElementById('modalBackdrop');
const donateHeaderBtn = document.getElementById('donateHeaderBtn');
const binanceBtn = document.getElementById('binanceBtn');
const copyFeedback = document.getElementById('copyFeedback');
const cropModal = document.getElementById('cropModal');
const cropTarget = document.getElementById('cropTarget');
const cancelCropBtn = document.getElementById('cancelCropBtn');
const applyCropBtn = document.getElementById('applyCropBtn');
const CRYPTO_WALLET = "0x1234...ABCD";

// --- State ---
let appState = {
    files: [],
    activeIndex: 0,
    settings: {
        quality: 0.8,
        format: 'image/webp',
        maxWidth: null
    },
    language: 'en' // Default
};

// --- i18n & Translations ---
const translations = {
    en: {
        privacy_badge: "100% PRIVATE • OFFLINE",
        buy_coffee: "Buy me a coffee",
        hero_title_1: "The Offline",
        hero_title_2: "AI Image Editor",
        hero_subtitle: "Remove backgrounds, crop, and compress images locally. No data leaves your device.",
        drop_title: "Drop your photos here",
        drop_subtitle: "JPG, PNG, WEBP (Max 10)",
        promise_privacy_title: "Why Offline?",
        promise_privacy_desc: "Your photos never touch a server. All processing happens in your browser using WebAssembly. 100% Private.",
        promise_free_title: "Why Free?",
        promise_free_desc: "I built this because I hate subscriptions. It's free forever. If it helps you, a coffee is appreciated but never required.",
        btn_crop: "Crop",
        btn_bg_remove: "Remove BG",
        ai_processing_title: "Ghost is working...",
        label_original: "ORIGINAL",
        settings_title: "Global Settings",
        format_label: "Output Format",
        quality_label: "Quality",
        resize_label: "Resize (Max Width)",
        stats_title: "Current View",
        stat_input: "Input",
        stat_output: "Output",
        btn_download_one: "Download Current",
        btn_download_all: "Download All (ZIP)",
        zipping_status: "Zipping...",
        crop_modal_title: "Crop Editor",
        btn_cancel: "Cancel",
        btn_apply: "Apply",
        crop_instructions: "Use mouse or gestures to adjust crop area",
        donate_title: "GhostCut is Free",
        donate_desc: "I built this because I hate subscriptions. It's free forever. <br><span class='text-gray-300 font-medium'>If I saved you some time today</span>, buying me a coffee makes a huge difference.",
        donate_close: "No thanks, maybe later",
        // Dynamic
        donate_mp: "Mercado Pago",
        donate_mp_desc: "Argentina 🇦🇷 • Simple transfer",
        donate_kofi: "Ko-fi / PayPal",
        donate_kofi_desc: "International 🌍 • Support the dev",
        donate_crypto: "Binance / Crypto",
        donate_crypto_desc: "Click to copy wallet"
    },
    es: {
        privacy_badge: "100% PRIVADO • OFFLINE",
        buy_coffee: "Invítame un café",
        hero_title_1: "Editor de Imágenes",
        hero_title_2: "IA Offline y Seguro",
        hero_subtitle: "Elimina fondos, recorta y comprime localmente. Tus fotos nunca salen de tu dispositivo.",
        drop_title: "Arrastra tus fotos aquí",
        drop_subtitle: "JPG, PNG, WEBP (Max 10)",
        promise_privacy_title: "¿Por qué Offline?",
        promise_privacy_desc: "Tus fotos nunca tocan un servidor. Todo el procesamiento ocurre en tu navegador usando WebAssembly. 100% Privado.",
        promise_free_title: "¿Por qué Gratis?",
        promise_free_desc: "Odio las suscripciones tanto como tú. Es gratis para siempre. Si te sirve, un café se agradece pero no es obligatorio.",
        btn_crop: "Recortar",
        btn_bg_remove: "Sin Fondo",
        ai_processing_title: "Ghost está trabajando...",
        label_original: "ORIGINAL",
        settings_title: "Configuración Global",
        format_label: "Formato de Salida",
        quality_label: "Calidad",
        resize_label: "Redimensionar (Ancho Max)",
        stats_title: "Vista Actual",
        stat_input: "Entrada",
        stat_output: "Salida",
        btn_download_one: "Descargar Actual",
        btn_download_all: "Descargar Todo (ZIP)",
        zipping_status: "Comprimiendo...",
        crop_modal_title: "Editor de Recorte",
        btn_cancel: "Cancelar",
        btn_apply: "Aplicar",
        crop_instructions: "Usa el mouse o gestos para ajustar el área",
        donate_title: "GhostCut es Gratis",
        donate_desc: "Creé esto porque odio las suscripciones. Es gratis para siempre. <br><span class='text-gray-300 font-medium'>Si te ahorré tiempo hoy</span>, invitarme un café hace una gran diferencia.",
        donate_close: "Ahora no, gracias",
        // Dynamic
        donate_mp: "Mercado Pago",
        donate_mp_desc: "Argentina 🇦🇷 • Transferencia simple",
        donate_kofi: "Ko-fi / PayPal",
        donate_kofi_desc: "Internacional 🌍 • Apoya al dev",
        donate_crypto: "Binance / Cripto",
        donate_crypto_desc: "Click para copiar wallet"
    }
};

function detectLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('es')) return 'es';
    return 'en';
}

function updateTexts() {
    const lang = appState.language;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'INPUT' && el.placeholder) {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
}

// --- Core Helpers ---
function getExtension(mime) {
    if (mime === 'image/jpeg') return 'jpg';
    if (mime === 'image/png') return 'png';
    return 'webp';
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// --- Utility: Load Script Dynamically with Fallback ---
async function loadImglyWithFallback() {
    // Definir URLs de CDN para módulos ES (más moderno y confiable)
    const sources = [
        {
            url: 'https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.4.5/+esm',
            config: {
                publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.4.5/dist/'
            }
        },
        {
            url: 'https://esm.sh/@imgly/background-removal@1.4.5',
            config: {
                publicPath: 'https://staticimgly.com/@imgly/background-removal-data/1.4.5/dist/'
            }
        }
    ];

    for (const source of sources) {
        try {
            console.log(`Intentando cargar IA desde: ${source.url}`);

            // Usar import() dinámico en lugar de <script>
            const module = await import(source.url);

            // La librería suele exportar 'removeBackground' o ser el default
            // Verificamos qué exporta
            if (module.default) {
                window.imglyRemoveBackground = module.default;
            } else if (module.removeBackground) {
                window.imglyRemoveBackground = module.removeBackground;
            } else {
                // Si es un objeto con todo
                window.imglyRemoveBackground = module;
            }

            console.log("IA cargada exitosamente.");
            return source.config;

        } catch (e) {
            console.warn(`Fallo al cargar desde ${source.url}:`, e);
        }
    }

    throw new Error("No se pudo cargar la librería de IA desde ningún servidor. Verifica tu conexión.");
}

// --- Initialization Logic ---
// Auto-detect language on start
appState.language = detectLanguage();
updateTexts();

function handleFiles(fileList) {
    const validFiles = Array.from(fileList).filter(f => f.type.startsWith('image/')).slice(0, 10);

    if (validFiles.length === 0) {
        alert("Por favor sube imágenes válidas (JPG, PNG, WebP, etc).");
        return;
    }

    uploadSection.classList.add('opacity-0');
    setTimeout(() => {
        uploadSection.classList.add('hidden');
        editorSection.classList.remove('hidden');
        void editorSection.offsetWidth;
        editorSection.classList.remove('opacity-0');
    }, 300);

    let loadedCount = 0;
    validFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            appState.files.push({
                id: Date.now() + Math.random(),
                originalFile: file,
                originalUrl: e.target.result,
                compressedBlob: null,
                compressedUrl: null
            });

            loadedCount++;
            if (loadedCount === validFiles.length) {
                if (appState.files.length === validFiles.length) {
                    initEditor();
                } else {
                    renderThumbnails();
                    updateBatchBadge();
                }
            }
        };

        reader.onerror = () => {
            console.error("Error leyendo archivo:", file.name);
            loadedCount++;
            if (loadedCount === validFiles.length) initEditor();
        };

        reader.readAsDataURL(file);
    });
}

function initEditor() {
    renderThumbnails();
    selectImage(0);
    updateBatchBadge();
}

function renderThumbnails() {
    thumbnailsContainer.innerHTML = '';
    appState.files.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `thumb-item min-w-[60px] w-[60px] h-[60px] rounded-lg border-2 border-gray-700 overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-all flex-none relative ${index === appState.activeIndex ? 'active opacity-100' : ''}`;

        const img = document.createElement('img');
        img.src = item.originalUrl;
        img.className = "w-full h-full object-cover";
        img.onerror = function () {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PjxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iMS41Ij48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIyMSAxNSAxNiAxMCA1IDIxIj48L3BvbHlsaW5lPjwvc3ZnPg==';
            this.style.padding = '10px';
        }

        div.appendChild(img);
        div.onclick = () => selectImage(index);
        thumbnailsContainer.appendChild(div);
    });
}

function selectImage(index) {
    if (!appState.files[index]) return;
    appState.activeIndex = index;
    const currentItem = appState.files[index];

    document.querySelectorAll('.thumb-item').forEach((el, idx) => {
        if (idx === index) el.classList.add('active', 'opacity-100');
        else el.classList.remove('active', 'opacity-100');
        el.classList.add(idx === index ? 'opacity-100' : 'opacity-60');
    });

    currentFileName.innerText = currentItem.originalFile.name;
    currentIdxDisplay.innerText = `${index + 1} / ${appState.files.length}`;
    statOriginal.innerText = formatBytes(currentItem.originalFile.size);

    imageBefore.src = currentItem.originalUrl;

    processCurrent();
}

// --- Image Processing (Canvas) ---
function compressImage(srcUrl, settings) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        if (srcUrl.startsWith('http')) {
            img.crossOrigin = "Anonymous";
        }

        img.onload = () => {
            const canvas = document.getElementById('workerCanvas');
            const ctx = canvas.getContext('2d');

            let w = img.width;
            let h = img.height;

            if (w === 0 || h === 0) {
                resolve({ blob: new Blob(), width: 0, height: 0 });
                return;
            }

            if (settings.maxWidth && w > settings.maxWidth) {
                const ratio = settings.maxWidth / w;
                w = settings.maxWidth;
                h = h * ratio;
            }

            canvas.width = w;
            canvas.height = h;
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(img, 0, 0, w, h);

            let outputFormat = settings.format;
            canvas.toBlob((blob) => {
                if (blob) {
                    resolve({ blob: blob, width: w, height: h });
                } else {
                    console.error("Fallo al generar Blob");
                    resolve({ blob: new Blob(), width: w, height: h });
                }
            }, outputFormat, settings.quality);
        };

        img.onerror = (e) => {
            console.error("Error al renderizar imagen en Canvas. Verifica que el archivo no esté corrupto.");
            resolve({ blob: new Blob(), width: 0, height: 0 });
        };

        img.src = srcUrl;
    });
}

function processCurrent() {
    const item = appState.files[appState.activeIndex];
    if (!item) return;

    spinner.classList.remove('hidden');

    compressImage(item.originalUrl, appState.settings).then(result => {
        item.compressedBlob = result.blob;
        if (item.compressedUrl) URL.revokeObjectURL(item.compressedUrl);

        if (result.blob.size > 0) {
            item.compressedUrl = URL.createObjectURL(result.blob);
            imageAfter.src = item.compressedUrl;
            statCompressed.innerText = formatBytes(result.blob.size);

            const savings = ((item.originalFile.size - result.blob.size) / item.originalFile.size) * 100;
            const isPositive = savings > 0;

            statSavings.innerText = isPositive ? `-${savings.toFixed(1)}%` : `+${Math.abs(savings).toFixed(1)}%`;
            statSavings.className = isPositive ? "text-[10px] text-green-400 font-bold" : "text-[10px] text-red-400 font-bold";

            savingsBar.style.width = Math.min(Math.max(savings, 0), 100) + '%';
            savingsBar.className = isPositive ? "bg-green-500 h-full transition-all duration-500" : "bg-red-500 h-full transition-all duration-500";
        } else {
            statCompressed.innerText = "Error";
            imageAfter.src = "";
        }

        spinner.classList.add('hidden');
        setTimeout(syncDimensions, 50);
    });
}

let processTimeout;
function debouncedProcess() {
    spinner.classList.remove('hidden');
    clearTimeout(processTimeout);
    processTimeout = setTimeout(processCurrent, 150);
}

// --- AI Background Removal (MULTI-SOURCE FALLBACK) ---
bgRemoveBtn.addEventListener('click', async () => {
    const currentItem = appState.files[appState.activeIndex];
    if (!currentItem) return;

    aiLoader.classList.remove('hidden');
    aiLoaderText.innerText = "Conectando con motor de IA...";

    // Verificar soporte de alto rendimiento
    if (!window.crossOriginIsolated) {
        console.warn("⚠️ La página no está en modo 'crossOriginIsolated'. La IA funcionará lento.");
        aiLoaderText.innerText = "Modo lento detectado (falta COOP/COEP)...";
    }

    try {
        // 1. Optimizar imagen si es muy grande (max 1500px) para evitar cuelgues
        let imageToProcess = currentItem.originalUrl;

        // Verificar dimensiones
        const imgTemp = new Image();
        imgTemp.src = currentItem.originalUrl;
        await new Promise(resolve => {
            imgTemp.onload = resolve;
            imgTemp.onerror = resolve; // Continuar aunque falle carga previa
        });

        if (imgTemp.width > 1500 || imgTemp.height > 1500) {
            aiLoaderText.innerText = "Optimizando imagen para IA...";
            console.log(`Redimensionando imagen de ${imgTemp.width}x${imgTemp.height} a max 1500px`);

            const resized = await compressImage(currentItem.originalUrl, {
                maxWidth: 1500,
                format: 'image/jpeg',
                quality: 0.9
            });

            if (resized.blob && resized.blob.size > 0) {
                imageToProcess = URL.createObjectURL(resized.blob);
            }
        }

        // 2. Cargar librería
        const config = await loadImglyWithFallback();

        aiLoaderText.innerText = "Descargando modelos (puede tardar ~60s)...";
        console.log("Config IA:", config);

        // 3. Preparar función
        let removeBackgroundFn = window.imglyRemoveBackground;
        if (typeof removeBackgroundFn !== 'function') {
            if (removeBackgroundFn.removeBackground) removeBackgroundFn = removeBackgroundFn.removeBackground;
            else if (removeBackgroundFn.default) removeBackgroundFn = removeBackgroundFn.default;
        }

        // 4. Ejecutar con Timeout y Progreso
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('TIMEOUT_AI')), 120000); // 2 minutos
        });

        let elapsed = 0;
        const progressInterval = setInterval(() => {
            elapsed += 5;
            aiLoaderText.innerText = `Procesando IA... (${elapsed}s)`;
        }, 5000);

        console.log("Iniciando removeBackground...");

        const blob = await Promise.race([
            removeBackgroundFn(imageToProcess, config),
            timeoutPromise
        ]);

        clearInterval(progressInterval);
        console.log("IA completada. Blob size:", blob.size);

        // 5. Actualizar UI
        const newUrl = URL.createObjectURL(blob);
        currentItem.originalUrl = newUrl;

        const newName = currentItem.originalFile.name.replace(/\.[^/.]+$/, "") + ".png";
        const newFile = new File([blob], newName, { type: "image/png", lastModified: Date.now() });
        currentItem.originalFile = newFile;
        currentFileName.innerText = newName;

        imageBefore.src = newUrl;
        statOriginal.innerText = formatBytes(blob.size);

        const activeThumb = thumbnailsContainer.children[appState.activeIndex];
        if (activeThumb) activeThumb.querySelector('img').src = newUrl;

        if (appState.settings.format === 'image/jpeg') {
            formatBtns.forEach(b => {
                if (b.dataset.format === 'image/png') b.click();
            });
        } else {
            processCurrent();
        }

    } catch (error) {
        console.error("Error IA:", error);
        let msg = `⚠️ Error al procesar con IA:\n\n${error.message}`;

        if (error.message === 'TIMEOUT_AI' || error.message.includes('Timeout')) {
            msg = "⚠️ El procesamiento tardó demasiado (Timeout).\n\nPosibles causas:\n• Conexión lenta descargando modelos\n• Imagen demasiado compleja\n• Memoria insuficiente en el navegador\n\nIntenta con una imagen más pequeña.";
        }

        alert(msg);
    } finally {
        aiLoader.classList.add('hidden');
    }
});


// --- Other Listeners ---
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('border-blue-500', 'bg-gray-800/50'); });
dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.classList.remove('border-blue-500', 'bg-gray-800/50'); });
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-blue-500', 'bg-gray-800/50');
    handleFiles(e.dataTransfer.files);
});
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

addMoreBtn.addEventListener('click', () => {
    appState.files = [];
    thumbnailsContainer.innerHTML = '';
    editorSection.classList.add('hidden', 'opacity-0');
    uploadSection.classList.remove('hidden');
    setTimeout(() => uploadSection.classList.remove('opacity-0'), 50);
    fileInput.value = '';
});

qualityInput.addEventListener('input', (e) => {
    appState.settings.quality = parseInt(e.target.value) / 100;
    qualityValue.innerText = e.target.value + '%';
    debouncedProcess();
});

maxWidthInput.addEventListener('change', (e) => {
    const val = parseInt(e.target.value);
    appState.settings.maxWidth = isNaN(val) ? null : val;
    debouncedProcess();
});

formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formatBtns.forEach(b => {
            b.classList.remove('active', 'bg-blue-600', 'text-white', 'border-blue-500');
            b.classList.add('bg-gray-800', 'text-gray-400', 'border-gray-700');
        });
        btn.classList.remove('bg-gray-800', 'text-gray-400', 'border-gray-700');
        btn.classList.add('active', 'bg-blue-600', 'text-white', 'border-blue-500');

        appState.settings.format = btn.dataset.format;

        let label = "WEBP";
        if (appState.settings.format === 'image/jpeg') label = "JPEG";
        if (appState.settings.format === 'image/png') label = "PNG";
        outputFormatLabel.innerText = label;

        debouncedProcess();
    });
});

deleteBtn.addEventListener('click', () => {
    if (appState.files.length === 0) return;
    appState.files.splice(appState.activeIndex, 1);

    if (appState.files.length === 0) {
        thumbnailsContainer.innerHTML = '';
        editorSection.classList.add('hidden', 'opacity-0');
        uploadSection.classList.remove('hidden');
        setTimeout(() => uploadSection.classList.remove('opacity-0'), 50);
        fileInput.value = '';
        batchCountBadge.classList.add('hidden');
    } else {
        if (appState.activeIndex >= appState.files.length) {
            appState.activeIndex = appState.files.length - 1;
        }
        renderThumbnails();
        selectImage(appState.activeIndex);
        updateBatchBadge();
    }
});

// --- Cropper Logic ---
let cropperInstance = null;

cropBtn.addEventListener('click', () => {
    const currentItem = appState.files[appState.activeIndex];
    if (!currentItem) return;

    cropTarget.src = currentItem.originalUrl;
    cropModal.classList.remove('hidden');

    if (cropperInstance) cropperInstance.destroy();
    cropperInstance = new Cropper(cropTarget, {
        viewMode: 1,
        dragMode: 'move',
        autoCropArea: 0.9,
        background: false,
        modal: true,
        guides: true,
        center: true,
        highlight: false,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: false,
    });
});

cancelCropBtn.addEventListener('click', () => {
    cropModal.classList.add('hidden');
    if (cropperInstance) cropperInstance.destroy();
});

applyCropBtn.addEventListener('click', () => {
    if (!cropperInstance) return;
    cropperInstance.getCroppedCanvas().toBlob((blob) => {
        const currentItem = appState.files[appState.activeIndex];
        const newUrl = URL.createObjectURL(blob);
        currentItem.originalUrl = newUrl;
        const newFile = new File([blob], currentItem.originalFile.name, { type: blob.type, lastModified: Date.now() });
        currentItem.originalFile = newFile;

        cropModal.classList.add('hidden');
        if (cropperInstance) cropperInstance.destroy();

        imageBefore.src = newUrl;
        statOriginal.innerText = formatBytes(blob.size);

        const activeThumb = thumbnailsContainer.children[appState.activeIndex];
        if (activeThumb) activeThumb.querySelector('img').src = newUrl;

        processCurrent();
    }, 'image/png');
});

// --- Downloads & Export ---
downloadCurrentBtn.addEventListener('click', () => {
    const item = appState.files[appState.activeIndex];
    if (!item || !item.compressedBlob) return;
    const ext = getExtension(appState.settings.format);
    const name = item.originalFile.name.split('.')[0] + '_hacelacorta.' + ext;
    saveBlob(item.compressedBlob, name);
});

downloadAllBtn.addEventListener('click', async () => {
    if (appState.files.length === 0) return;

    downloadAllBtn.disabled = true;
    downloadAllBtn.innerHTML = `<span class="loader w-4 h-4 border-white/30 border-l-white mr-2"></span> Comprimiendo...`;
    zipProgress.classList.remove('hidden');

    const zip = new JSZip();
    const folder = zip.folder("HacelaCorta_Batch");

    try {
        for (let i = 0; i < appState.files.length; i++) {
            const item = appState.files[i];
            const percent = ((i) / appState.files.length) * 100;
            zipProgressBar.style.width = percent + '%';

            const result = await compressImage(item.originalUrl, appState.settings);
            const ext = getExtension(appState.settings.format);
            const name = item.originalFile.name.split('.')[0] + '.' + ext;

            folder.file(name, result.blob);
        }

        zipProgressBar.style.width = '100%';
        const content = await zip.generateAsync({ type: "blob" });
        saveBlob(content, "HacelaCorta_Optimizado.zip");

        setTimeout(() => toggleModal(true), 1500);

    } catch (e) {
        console.error(e);
        alert("Hubo un error al procesar el lote.");
    } finally {
        downloadAllBtn.disabled = false;
        downloadAllBtn.innerHTML = `<i data-lucide="archive" class="w-4 h-4 mr-2"></i> Descargar Todo (ZIP)`;
        zipProgress.classList.add('hidden');
        zipProgressBar.style.width = '0';
    }
});

function saveBlob(blob, filename) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// --- Modals ---
function toggleModal(show) {
    if (show) {
        donationModal.classList.remove('hidden');
        void donationModal.offsetWidth;
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');

        renderDonationOptions();
    } else {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => donationModal.classList.add('hidden'), 200);
    }
}

function renderDonationOptions() {
    const container = document.getElementById('donationOptions');
    const t = translations[appState.language];
    container.innerHTML = '';

    // Option 1: Mercado Pago (Only for Spanish) or Ko-fi (International)
    if (appState.language === 'es') {
        const mpLink = document.createElement('a');
        mpLink.href = "https://link.mercadopago.com.ar/tualias"; // REPLACE WITH REAL ALIAS
        mpLink.target = "_blank";
        mpLink.className = "block group relative overflow-hidden rounded-xl bg-[#009EE3]/10 border border-[#009EE3]/30 hover:bg-[#009EE3]/20 transition-all p-4 flex items-center gap-4";
        mpLink.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-[#009EE3] flex items-center justify-center flex-none">
                <i data-lucide="qr-code" class="text-white w-5 h-5"></i>
            </div>
            <div class="flex-1 text-left">
                <h4 class="font-bold text-white text-sm group-hover:text-[#009EE3] transition-colors">${t.donate_mp}</h4>
                <p class="text-[10px] text-gray-400">${t.donate_mp_desc}</p>
            </div>
        `;
        container.appendChild(mpLink);
    } else {
        const kofiLink = document.createElement('a');
        kofiLink.href = "https://ko-fi.com/tualias"; // REPLACE WITH REAL KO-FI
        kofiLink.target = "_blank";
        kofiLink.className = "block group relative overflow-hidden rounded-xl bg-[#FF5E5B]/10 border border-[#FF5E5B]/30 hover:bg-[#FF5E5B]/20 transition-all p-4 flex items-center gap-4";
        kofiLink.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-[#FF5E5B] flex items-center justify-center flex-none">
                <i data-lucide="coffee" class="text-white w-5 h-5"></i>
            </div>
            <div class="flex-1 text-left">
                <h4 class="font-bold text-white text-sm group-hover:text-[#FF5E5B] transition-colors">${t.donate_kofi}</h4>
                <p class="text-[10px] text-gray-400">${t.donate_kofi_desc}</p>
            </div>
        `;
        container.appendChild(kofiLink);
    }

    // Option 2: Crypto (Always visible)
    const cryptoBtn = document.createElement('div');
    cryptoBtn.className = "block group relative overflow-hidden rounded-xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/30 hover:bg-[#F3BA2F]/20 transition-all p-4 cursor-pointer";
    cryptoBtn.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-[#F3BA2F] flex items-center justify-center flex-none">
                <i data-lucide="bitcoin" class="text-black w-5 h-5"></i>
            </div>
            <div class="flex-1 text-left">
                <h4 class="font-bold text-white text-sm group-hover:text-[#F3BA2F] transition-colors">${t.donate_crypto}</h4>
                <p class="text-[10px] text-gray-400">${t.donate_crypto_desc}</p>
            </div>
        </div>
        <div id="copyFeedback" class="hidden absolute inset-0 bg-[#F3BA2F] flex items-center justify-center text-black font-bold text-sm">
            Copied!
        </div>
    `;

    cryptoBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(CRYPTO_WALLET).then(() => {
            const fb = cryptoBtn.querySelector('#copyFeedback');
            fb.classList.remove('hidden');
            setTimeout(() => fb.classList.add('hidden'), 2000);
        });
    });

    container.appendChild(cryptoBtn);
    lucide.createIcons(); // Re-init icons for new elements
}

donateHeaderBtn.addEventListener('click', () => toggleModal(true));
closeModal.addEventListener('click', () => toggleModal(false));
closeModalLink.addEventListener('click', () => toggleModal(false));
modalBackdrop.addEventListener('click', () => toggleModal(false));


// --- Helpers UI ---
function updateBatchBadge() {
    batchCountBadge.innerText = `${appState.files.length} ARCHIVO${appState.files.length > 1 ? 'S' : ''}`;
    batchCountBadge.classList.remove('hidden');
}

// Slider Sync
function syncDimensions() {
    const container = compareWrapper.getBoundingClientRect();
    const img = imageBefore;
    if (!img.naturalWidth) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = container.width / container.height;
}

let isSliding = false;
compareWrapper.addEventListener('mousedown', () => isSliding = true);
window.addEventListener('mouseup', () => isSliding = false);
compareWrapper.addEventListener('mousemove', (e) => {
    if (!isSliding) return;
    const rect = compareWrapper.getBoundingClientRect();
    let x = e.pageX - rect.left;
    if (x < 0) x = 0; if (x > rect.width) x = rect.width;
    const percentage = (x / rect.width) * 100;
    overlay.style.width = percentage + "%";
    sliderHandle.style.left = percentage + "%";
});
compareWrapper.addEventListener('touchstart', () => isSliding = true);
window.addEventListener('touchend', () => isSliding = false);
compareWrapper.addEventListener('touchmove', (e) => {
    if (!isSliding) return;
    const rect = compareWrapper.getBoundingClientRect();
    let x = e.touches[0].pageX - rect.left;
    if (x < 0) x = 0; if (x > rect.width) x = rect.width;
    overlay.style.width = (x / rect.width) * 100 + "%";
    sliderHandle.style.left = (x / rect.width) * 100 + "%";
});

<!DOCTYPE html>
<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Digital Product Expert | Neo-Brutalist Portfolio</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<style type="text/tailwindcss">
        :root {
            --neo-bg: #f5f5f5;
            --neo-black: #000000;
            --neo-white: #ffffff;
            --neo-accent: #2E5BFF;--neo-border-width: 3px;
            --neo-shadow-offset: 8px;
        }
        @layer base {
            body {
                @apply bg-[var(--neo-bg)] text-[var(--neo-black)] font-['JetBrains_Mono'];
            }
            h1, h2, h3, h4 {
                @apply font-['Archivo_Black'] uppercase tracking-tight text-[var(--neo-black)];
            }
        }
        .neo-card {
            background-color: var(--neo-white);
            border: var(--neo-border-width) solid var(--neo-black);
            box-shadow: var(--neo-shadow-offset) var(--neo-shadow-offset) 0px 0px var(--neo-black);
            transition: all 0.2s ease;
        }
        .neo-card-accent {
            background-color: var(--neo-white);
            border: var(--neo-border-width) solid var(--neo-black);
            box-shadow: var(--neo-shadow-offset) var(--neo-shadow-offset) 0px 0px var(--neo-accent);
        }
        .neo-button {
            @apply px-6 py-3 font-bold uppercase inline-flex items-center gap-2;
            background-color: var(--neo-accent);
            color: var(--neo-white);
            border: var(--neo-border-width) solid var(--neo-black);
            box-shadow: 4px 4px 0px 0px var(--neo-black);
            transition: all 0.1s ease;
        }
        .neo-button:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0px 0px var(--neo-black);
        }
        .neo-button-secondary {
            @apply px-6 py-3 font-bold uppercase inline-flex items-center gap-2 bg-white text-black;
            border: var(--neo-border-width) solid var(--neo-black);
            box-shadow: 4px 4px 0px 0px var(--neo-accent);
        }
        .neo-border-bottom {
            border-bottom: var(--neo-border-width) solid var(--neo-black);
        }
        .neo-border-right {
            border-right: var(--neo-border-width) solid var(--neo-black);
        }
        .accent-text {
            color: var(--neo-accent);
        }
        .grid-bg {
            background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
</head>
<body class="grid-bg antialiased">
<nav class="fixed top-0 left-0 w-full z-50 bg-[var(--neo-bg)] neo-border-bottom">
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div class="flex items-center border-r-[3px] border-black h-full px-8 -ml-6">
<span class="font-['Archivo_Black'] text-2xl tracking-tighter italic">DP.EXE</span>
</div>
<div class="hidden md:flex items-center gap-12 font-bold text-sm">
<a class="hover:text-[var(--neo-accent)] transition-colors" href="#services">_SERVICES</a>
<a class="hover:text-[var(--neo-accent)] transition-colors" href="#work">_WORK</a>
<a class="hover:text-[var(--neo-accent)] transition-colors" href="#about">_ABOUT</a>
<a class="hover:text-[var(--neo-accent)] transition-colors" href="#process">_PROCESS</a>
</div>
<div class="border-l-[3px] border-black h-full flex items-center px-8 -mr-6">
<a class="neo-button text-sm" href="mailto:hello@example.com">
                INITIALIZE_CONTACT
            </a>
</div>
</div>
</nav>
<header class="pt-48 pb-24 px-6 relative overflow-hidden">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-[3px] border-black neo-card-accent">
<div class="lg:col-span-8 p-8 md:p-16 neo-border-right bg-white">
<div class="inline-block px-4 py-1 bg-[var(--neo-accent)] text-white font-bold text-xs mb-8">
                    STATUS: AVAILABLE_FOR_HIRE
                </div>
<h1 class="text-6xl md:text-8xl leading-none mb-8">
                    DIGITAL<br/><span class="accent-text">PRODUCT</span><br/>EXPERT
                </h1>
<p class="text-xl text-slate-600 max-w-xl leading-relaxed mb-12 font-medium">
                    // BUILDING HIGH-END DIGITAL SYSTEMS THROUGH TECHNICAL PRECISION AND RAW AESTHETICS. 
                    // NO FRILLS. JUST RESULTS.
                </p>
<div class="flex flex-wrap gap-6">
<a class="neo-button text-lg" href="#work">PROJECT_INDEX</a>
<a class="neo-button-secondary text-lg" href="#about">CORE_DATA</a>
</div>
</div>
<div class="lg:col-span-4 bg-white flex flex-col">
<div class="flex-1 min-h-[400px]">
<img alt="Profile" class="w-full h-full object-cover grayscale brightness-90 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCikvhrq3LSBTGgws4EhrhP0bB7UUaUzrsHX4W_1wENBGGCtphArPizkyUjhqehkt9UzRbjKvMbPV0tARhcAS7SmKBKHjJ9-iA759K1fpyTWwGbZRsyVBlJdYsEog5JWMRfzXJ6zvsNR2214KimVp9LcQVxy8QIAf1Rt-qbs0e0v3obowGe1p3iyHi3hbJIof4nYwOOvkdhSahIoRe5YMZPtyiEG0jN8tKbGq-hrSFxzk35LEAwVJDedGWhmM-iHmOq7x3it7Uv2D2w"/>
</div>
<div class="p-8 border-t-[3px] border-black text-black">
<div class="grid grid-cols-2 gap-8">
<div>
<div class="text-4xl font-['Archivo_Black']">10+</div>
<div class="text-[10px] font-bold uppercase tracking-widest">Years_Exp</div>
</div>
<div>
<div class="text-4xl font-['Archivo_Black']">150+</div>
<div class="text-[10px] font-bold uppercase tracking-widest">Completed_Units</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
<section class="py-12 px-6 border-y-[3px] border-black bg-white">
<div class="max-w-7xl mx-auto overflow-hidden">
<div class="flex justify-between items-center gap-12 text-black opacity-80">
<span class="text-3xl font-black tracking-tighter">APPLE.SYSTEMS</span>
<span class="text-3xl font-black tracking-tighter">TESLA.GRID</span>
<span class="text-3xl font-black tracking-tighter">STRIPE.CORE</span>
<span class="text-3xl font-black tracking-tighter">FIGMA.UI</span>
<span class="text-3xl font-black tracking-tighter md:block hidden">NOTION.LABS</span>
</div>
</div>
</section>
<section class="py-24 px-6" id="services">
<div class="max-w-7xl mx-auto">
<div class="mb-20 border-l-[8px] border-[var(--neo-accent)] pl-8">
<h2 class="text-5xl mb-4">CAPABILITIES_</h2>
<p class="text-slate-500 max-w-md uppercase text-sm font-bold tracking-widest">Full-spectrum technical protocols for digital dominance.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="neo-card p-10 flex flex-col h-full hover:-translate-y-2">
<div class="w-16 h-16 bg-[var(--neo-accent)] text-white flex items-center justify-center mb-8 border-[3px] border-black">
<span class="material-symbols-outlined font-bold text-3xl">draw</span>
</div>
<h3 class="text-2xl mb-6">UI/UX_ENGINEERING</h3>
<p class="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    EXTRACTING UTILITY FROM COMPLEXITY. HIGH-PRECISION INTERFACE CONSTRUCTION AND PROTO-TYPE VALIDATION.
                </p>
<div class="pt-6 border-t-[2px] border-black/10 space-y-3">
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> USER_PATH_ANALYSIS</div>
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> WIRE-FRAME_SCHEMA</div>
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> ATOMIC_DESIGN_SYST</div>
</div>
</div>
<div class="neo-card p-10 flex flex-col h-full hover:-translate-y-2">
<div class="w-16 h-16 bg-[var(--neo-accent)] text-white flex items-center justify-center mb-8 border-[3px] border-black">
<span class="material-symbols-outlined font-bold text-3xl">terminal</span>
</div>
<h3 class="text-2xl mb-6">STACK_DEPLOYMENT</h3>
<p class="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    HARD-CODED PERFORMANCE. SCALABLE ARCHITECTURE FOR WEB AND MOBILE SUB-SYSTEMS.
                </p>
<div class="pt-6 border-t-[2px] border-black/10 space-y-3">
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> NEXT.JS_RUNTIME</div>
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> NATIVE_ENV_BUILD</div>
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> API_ORCHESTRATION</div>
</div>
</div>
<div class="neo-card p-10 flex flex-col h-full hover:-translate-y-2">
<div class="w-16 h-16 bg-[var(--neo-accent)] text-white flex items-center justify-center mb-8 border-[3px] border-black">
<span class="material-symbols-outlined font-bold text-3xl">database</span>
</div>
<h3 class="text-2xl mb-6">BRAND_STRATEGY</h3>
<p class="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    IDENTIFYING MARKET VULNERABILITIES. BRAND POSITIONING THROUGH AGGRESSIVE VISUAL DIFFERENTIATION.
                </p>
<div class="pt-6 border-t-[2px] border-black/10 space-y-3">
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> IDENTITY_SYSTEMS</div>
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> GROWTH_ALGORITHMS</div>
<div class="flex items-center gap-3 text-xs font-bold"><span class="w-2 h-2 bg-[var(--neo-accent)]"></span> MARKET_PENETRATION</div>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 px-6 bg-black text-white" id="work">
<div class="max-w-7xl mx-auto">
<div class="flex items-end justify-between mb-16 border-b-[8px] border-white pb-8">
<div>
<h2 class="text-6xl mb-2 text-white">SELECTED_WORK_</h2>
<p class="uppercase font-bold tracking-tighter text-sm">Deployment History // Sector: Public</p>
</div>
<a class="neo-button text-sm" href="#">
                EXTRACT_ALL_DATA
            </a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<div class="group cursor-pointer">
<div class="border-[4px] border-white bg-white p-0 mb-6 relative neo-card-accent shadow-[12px_12px_0px_0px_var(--neo-accent)]">
<div class="aspect-video overflow-hidden">
<img alt="Aurora Financial" class="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPLOGGDIxywr43NY4L04e1hzbsXtPIydsL-HnTDo0oCO8_k_OH_Ty4MyKDpPv4fMzEoQ1PuYfGjhjNIYJ6vRoKCy6nOJ5lFESz95LmgDJW0UzR2c6biTdSwARlfKwSHNH2s90eSlD__mX_fDNPdv3rtkz0_k9KVOsyrut-vN9iA36lx31AXyjxVPu5XIJKcnOwF60_h5gG-vL20xNhkXgbUzk2HSmjK9mUVrpm_eFJ3s3Y1_aOl1dK-9J6csLJTYgJBUz0oY7Tzq8f"/>
</div>
</div>
<div class="flex justify-between items-center px-2">
<div>
<h3 class="text-2xl text-white">AURORA_FINANCE.EXE</h3>
<p class="text-xs font-bold uppercase mt-1">Mobile Interface / Dashboard</p>
</div>
<span class="material-symbols-outlined text-4xl group-hover:text-[var(--neo-accent)]">call_made</span>
</div>
</div>
<div class="group cursor-pointer">
<div class="border-[4px] border-white bg-white p-0 mb-6 relative neo-card-accent shadow-[12px_12px_0px_0px_var(--neo-accent)]">
<div class="aspect-video overflow-hidden">
<img alt="Nexus Dashboard" class="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvnmhZTC0E77ROLTqFJ_WgAVbisP6CpoGDPsCncvOP5xpEG1rDqccewLEFvm83wOHYdIf43BPpY0XwZCcgVo1cuw0i5w7Jb397Mn41ydisqsx5cKdOFmQY3NARYzey2AvhDRIRGjBiXVZF35nmwXQL-jRdWyUnNIbtSKGTcXzNNuRGOJIzGS5fDTlqXwEM5F9at61gL7nOljPVuBkEgyEhGntd7yLwr2eEp-2AMYdGt6h5g4bwR-6v2NhKQDBvCWTx5GlRZfml5JO1"/>
</div>
</div>
<div class="flex justify-between items-center px-2">
<div>
<h3 class="text-2xl text-white">NEXUS_INFRA.SYS</h3>
<p class="text-xs font-bold uppercase mt-1">SaaS Architecture</p>
</div>
<span class="material-symbols-outlined text-4xl group-hover:text-[var(--neo-accent)]">call_made</span>
</div>
</div>
<div class="group cursor-pointer">
<div class="border-[4px] border-white bg-white p-0 mb-6 relative neo-card-accent shadow-[12px_12px_0px_0px_var(--neo-accent)]">
<div class="aspect-video overflow-hidden">
<img alt="Zenith Store" class="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeG1XhoMUzZIOi8TMOphZxhI06Gz7YfG5U6x5BjD3V0D1DQySy3hZcKbKxlDemv8nYObU1KROD8rT69FyD_6GzrrV5-Bo1-bGnqOHXtTJju_py16pXbOlKl4xuejnbOwRHDxiKPEsiaYe6GwyT50xTQariS2OCzTaGC6qWaJJi6c0MaSd9kP4SMlAxPiJC4DMvEg7I-BTvjnIZG8xAe8fzSHoYI62yz7bg1spIkJns2Puv1JvgsM3a87Hua6KWQBOmsvwLnq-lB6Pj"/>
</div>
</div>
<div class="flex justify-between items-center px-2">
<div>
<h3 class="text-2xl text-white">ZENITH_RETAIL.NODE</h3>
<p class="text-xs font-bold uppercase mt-1">E-Commerce Protocol</p>
</div>
<span class="material-symbols-outlined text-4xl group-hover:text-[var(--neo-accent)]">call_made</span>
</div>
</div>
<div class="group cursor-pointer">
<div class="border-[4px] border-white bg-white p-0 mb-6 relative neo-card-accent shadow-[12px_12px_0px_0px_var(--neo-accent)]">
<div class="aspect-video overflow-hidden">
<img alt="Orbit Workspace" class="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfYk_h0SRDI5JCoRx6AfJkPtUOiLIQ5zYbr_RDBfynlyiTUnWn0AjtY7tVvPvKQ4ogelC22c-0xweChcxBnoxrSnuzpg8jxAsP4t8sch_ayNyd8BxeTecnPmdKvYf1IS8qdABoRncEyCdJlwuw7Q2MjTW1MlZ55vLsOPYW-g4adHo5_ZCTDrxZ3hQKc-Vmq9PUsa9W1KXyuRmpN3XYHCftJ86y-iFfQTmRwYPYFs8_iEeVeBe7yaj_OrihbDBxeZWUEjHReOb0c3y"/>
</div>
</div>
<div class="flex justify-between items-center px-2">
<div>
<h3 class="text-2xl text-white">ORBIT_COLLAB.V1</h3>
<p class="text-xs font-bold uppercase mt-1">Workflow Optimization</p>
</div>
<span class="material-symbols-outlined text-4xl group-hover:text-[var(--neo-accent)]">call_made</span>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 px-6 border-y-[3px] border-black" id="about">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-0 border-[3px] border-black neo-card">
<div class="bg-white p-8 md:p-12 neo-border-right">
<div class="grid grid-cols-2 gap-4 h-full">
<div class="col-span-2 border-[4px] border-black overflow-hidden aspect-[16/9]">
<img alt="Me at work" class="w-full h-full object-cover grayscale brightness-90 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMrvkyD2Ez2M_9o7d3snPm_SDYUacCGZunsx3z7Fsdg_t0NOFaf9-doHhfIHt_7aflBctNBRsLNBobZemwxpdSkLg48cDok2KvX_oP0aJNGKjDP-oLx3V5Dor_eycW0zPwbA2qaR_7yh3S2uh8Y3GBcN5_GFdiAYvzNy3daXD17NX79dRijZIJTiSme5OOgWZ_H4VVH6OBkwHldpET-MLfdfp6loFeYI0ky6Am343TTjzRJzwoI2xvrC_kh4Jts3_xtCIM1XUSB3V"/>
</div>
<div class="border-[4px] border-black overflow-hidden aspect-square">
<img alt="Meeting" class="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyKnN778x60CYb0lQUySj6k-YZmGYT4XXHDxVAzRLx7bWjx3Ep4t4y6JO7PU47IBP7XH2l6JVEYHMI6tpf05cJhIwEpGeV7I6ah8UODcSVIWpCNXKt8Kb-2lQC3nOIt2lQjvk6JYOzwERnlsu7efSFcE_Ynvtn7VkXTA3KxEoevt8hVVP1ex2MfCuEuvodKN7CI3LzllgnDHS8ACmoHtg9n_HCz-YD7gofa4ewVD7h6L6Quy5DnOMHJ4gYvi0W3a24GPYwe4_cceSb"/>
</div>
<div class="border-[4px] border-black overflow-hidden aspect-square">
<img alt="Collaboration" class="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYEbT_7V3OcPB9kRDBfx9U1Jh7CpCWytfvrO51f_gp1qko9_JFdgu0KCygmJnPhr6Jnkfd84h_a_LQrbvXfkgr-9PxmTB0HWd9b73G9thSwkSvKzLgglzA8Oq5oFWoONM1WXGBI3uIxM7Oc0u0eFIowMOoSuMzBOMDdl99t43y54k7MQNGFkimWJM5Ps_3XsKaJg4l_-v8kbfLk0Y-NE12RPSqQzGexE5x2TpUW89ebPZxJnM-92XH34YCnpzYDdIqALfF-FzQ4OrK"/>
</div>
</div>
</div>
<div class="p-8 md:p-12 flex flex-col justify-center bg-white">
<h2 class="text-4xl mb-8 accent-text">CORE_BIOMETRICS_</h2>
<div class="space-y-6 text-slate-700 text-sm leading-relaxed mb-10 font-medium">
<p>
                        I AM A DIGITAL PRODUCT EXPERT ENGINEERED FOR COMPLEX SYSTEMS. MY PHILOSOPHY IS ROOTED IN RAW FUNCTIONALITY AND TECHNICAL PRECISION. 
                    </p>
<p>
                        I DON'T JUST DESIGN INTERFACES; I DESIGN LOGIC. I BUILD SCALABLE LIBRARIES, ESTABLISH RIGID GUIDELINES, AND OPTIMIZE WORKFLOWS FOR PEAK OPERATIONAL EFFICIENCY.
                    </p>
</div>
<div class="space-y-4 mb-10">
<div class="flex items-center gap-4 bg-slate-100 p-4 border-l-4 border-[var(--neo-accent)]">
<span class="material-symbols-outlined accent-text">bolt</span>
<span class="text-xs font-bold uppercase tracking-wider">Freelance_Status: UNLOCKED</span>
</div>
<div class="flex items-center gap-4 bg-slate-100 p-4 border-l-4 border-[var(--neo-accent)]">
<span class="material-symbols-outlined accent-text">code</span>
<span class="text-xs font-bold uppercase tracking-wider">Stack_Version: 2024.v2</span>
</div>
<div class="flex items-center gap-4 bg-slate-100 p-4 border-l-4 border-[var(--neo-accent)]">
<span class="material-symbols-outlined accent-text">verified</span>
<span class="text-xs font-bold uppercase tracking-wider">Protocol: RESULTS_DRIVEN</span>
</div>
</div>
<a class="neo-button w-full justify-center" href="#">
                    ACCESS_FULL_JOURNAL
                </a>
</div>
</div>
</div>
</section>
<section class="py-24 px-6" id="process">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-20">
<h2 class="text-6xl mb-4">EXECUTION_LOG</h2>
<p class="text-[var(--neo-accent)] uppercase text-xs font-bold tracking-[0.5em]">Standard Operating Procedures</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] border-black neo-card shadow-[20px_20px_0px_0px_var(--neo-accent)]">
<div class="p-12 neo-border-right border-b-[3px] md:border-b-0 border-black bg-white">
<div class="text-6xl font-['Archivo_Black'] opacity-10 mb-8">01</div>
<h4 class="text-2xl mb-4 accent-text">DISCOVERY_</h4>
<p class="text-sm text-slate-600 leading-relaxed font-medium">
                    SCANNING THE LANDSCAPE. STAKEHOLDER DEBRIEFING. OBJECTIVE DEFINITION. REMOVING UNCERTAINTY FROM THE EQUATION.
                </p>
</div>
<div class="p-12 neo-border-right border-b-[3px] md:border-b-0 border-black bg-white">
<div class="text-6xl font-['Archivo_Black'] opacity-10 mb-8">02</div>
<h4 class="text-2xl mb-4 accent-text">BUILDING_</h4>
<p class="text-sm text-slate-600 leading-relaxed font-medium">
                    CONSTRUCTING THE CORE. ITERATIVE PROTOTYPING. HIGH-FIDELITY EXECUTION. PUSHING PIXELS INTO SUBMISSION.
                </p>
</div>
<div class="p-12 bg-white">
<div class="text-6xl font-['Archivo_Black'] opacity-10 mb-8">03</div>
<h4 class="text-2xl mb-4 accent-text">LAUNCH_</h4>
<p class="text-sm text-slate-600 leading-relaxed font-medium">
                    SYSTEM STRESS TESTING. PERFORMANCE AUDIT. DEPLOYMENT TO PRODUCTION ENVIRONMENT. MISSION ACCOMPLISHED.
                </p>
</div>
</div>
</div>
</section>
<footer class="pt-24 pb-12 px-6 bg-white text-black border-t-[3px] border-black">
<div class="max-w-7xl mx-auto">
<div class="neo-card p-12 md:p-20 mb-20 flex flex-col md:flex-row justify-between items-center gap-12 bg-white text-black shadow-[16px_16px_0px_0px_var(--neo-black)]">
<div class="max-w-2xl text-center md:text-left">
<h2 class="text-5xl md:text-7xl mb-8 leading-none">READY_FOR_DEPLOYMENT?</h2>
<p class="text-slate-600 mb-12 text-lg uppercase font-bold tracking-tight">
                    INITIALIZE PROJECT SEQUENCE. SEND YOUR SPECIFICATIONS.
                </p>
<div class="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
<a class="neo-button text-lg" href="mailto:hello@example.com">
<span class="material-symbols-outlined">mail</span>
                        EMAIL_SERVER
                    </a>
<a class="neo-button-secondary text-lg" href="#">
<span class="material-symbols-outlined">event</span>
                        SYNC_CALENDAR
                    </a>
</div>
<div class="flex items-center justify-center md:justify-start gap-6 mt-12">
<a class="w-14 h-14 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all" href="#">
<img alt="Dribbble" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZHcHb5J78UvQunOusWxZ1Q_1i6GENzakooUByvvvRFByKW-EiVsxHTa81feyJOPKzGekrD6bLJQFdqaaqEyv_vqq3fspjewrgjKZ9Edths-2Ny60g_VTccMA3DCmOyV255jfvyXdAXvgL1EKt2OHnHAAs87F1mdAoXhPrgdj_8EMikK7nItVleMT2KfK4WvauKrJKJuNpBM5uQIlDFAXbGy6ZbGuasB-egTfDa0CJ5yQJ3_3HZWl2BcVQFri8FPTJiqllryTFIe4N"/>
</a>
<a class="w-14 h-14 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all" href="#">
<img alt="Twitter" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7rzhh3Cz3pm8Xe3zxnUpKZxjSvsOPJ3eEanOhtLsq3-_W5Hl1lehRJFAGn4_9rRahsBQ2WCk94J8CACMtxoKdNLtgkHMnNld5UVH1DlxP5SSTA9qQiq4MEIE6Q-s0J8ovpCSCTnTEXfH94SqRE99uAVp6Jsxa07gk74o82IaB0Kn4y5DO-Y28wahsos7ftu882XCGMHzkFxU7p-rQ9rK9KGxl0_6SWzmCFdDF6Kk4kERj0Mtxb-AXDScN6XnBPgoba_s8tJ_tRpIt"/>
</a>
<a class="w-14 h-14 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all" href="#">
<img alt="LinkedIn" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSQpHduNhtqOsCinxUrzYP7BSKibRcLRlT0XIeDkuP6NNJXUtyKQUFfcxX9wNsbEDhJtWOJxNOctcIhE08OKFC3xTfcsPfXoW3a3mqfhiJJ0TEflrHHa4x76nKtlorzPnGcPskKAquEijslVtO7NqJqXYIlddIE2XQ8ZDqUpsL69qUBOXZf2ctpPilgeu5OmZH76SRiENG9pNacY8wcd9va4RMXwx-b6NkZUBfg9E5IbrmeZxTUoGvGvx8gm_9yC2mZydG2QxhwEo_"/>
</a>
</div>
</div>
<div class="w-full md:w-auto grid grid-cols-2 gap-16 text-xs font-black uppercase tracking-widest">
<div class="space-y-6">
<p class="accent-text opacity-100">_DIRECTORY</p>
<ul class="space-y-4">
<li><a class="hover:text-[var(--neo-accent)]" href="#services">SERVICES</a></li>
<li><a class="hover:text-[var(--neo-accent)]" href="#work">WORK</a></li>
<li><a class="hover:text-[var(--neo-accent)]" href="#about">ABOUT</a></li>
<li><a class="hover:text-[var(--neo-accent)]" href="#process">PROCESS</a></li>
</ul>
</div>
<div class="space-y-6">
<p class="accent-text">_RESOURCES</p>
<ul class="space-y-4">
<li><a class="hover:text-[var(--neo-accent)]" href="#">CURRICULUM</a></li>
<li><a class="hover:text-[var(--neo-accent)]" href="#">STUDIES</a></li>
<li><a class="hover:text-[var(--neo-accent)]" href="#">JOURNAL</a></li>
<li><a class="hover:text-[var(--neo-accent)]" href="#">MENTORING</a></li>
</ul>
</div>
</div>
</div>
<div class="flex flex-col md:row justify-between items-center gap-6 border-t-[3px] border-black pt-8 text-[10px] font-black uppercase tracking-widest">
<div class="flex items-center gap-4">
<div class="px-3 py-1 bg-black text-white font-bold">DP.EXE</div>
                © 2024 DIGITAL_PRODUCT_EXPERT // ALL_RIGHTS_RESERVED
            </div>
<div class="accent-text">
                ENCODED_WITH_PRECISION
            </div>
</div>
</div>
</footer>
<button class="fixed bottom-8 right-8 w-14 h-14 bg-[var(--neo-accent)] border-[3px] border-black flex items-center justify-center shadow-[6px_6px_0px_0px_var(--neo-black)] z-50 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_var(--neo-black)] transition-all">
<span class="material-symbols-outlined text-white font-bold">terminal</span>
</button>

</body></html>
import React, { useState, useEffect } from 'react';

import headshot from '../assets/images/Hero Section Headshot.png';


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(!isModalOpen);
        setIsMenuOpen(false);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('hello@shovondigital.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    // Once animated, we can stop observing it
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--neo-bg)] border-b-[3px] border-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center border-r-[3px] border-black h-full px-8 -ml-6">
                        <span className="font-['Archivo_Black'] text-2xl tracking-tighter italic">SHOVON DIGITAL</span>

                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12 font-bold text-sm">
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#services">_SERVICES</a>
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#work">_WORKS</a>
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#testimonials">_TESTIMONIALS</a>
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#about">_ABOUT</a>
                    </div>

                    <div className="flex items-center h-full">
                        {/* Contact Button (Desktop) */}
                        <div className="hidden md:flex items-center border-l-[3px] border-black h-full px-8 -mr-6">
                            <button className="neo-button text-sm" onClick={toggleModal}>
                                INITIALIZE_CONTACT
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden flex items-center justify-center w-10 h-10 ml-4 border-[3px] border-black bg-[var(--neo-accent)] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined font-bold">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[var(--neo-bg)] z-40 top-20 border-t-[3px] border-black transition-transform duration-300 md:hidden flex flex-col p-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col gap-6 text-2xl font-['Archivo_Black'] mt-8">
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#services" onClick={closeMenu}>_SERVICES</a>
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#work" onClick={closeMenu}>_WORKS</a>
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#testimonials" onClick={closeMenu}>_TESTIMONIALS</a>
                        <a className="hover:text-[var(--neo-accent)] transition-colors" href="#about" onClick={closeMenu}>_ABOUT</a>
                    </div>
                    <div className="mt-auto mb-8">
                        <button className="neo-button w-full justify-center text-sm" onClick={toggleModal}>
                            INITIALIZE_CONTACT
                        </button>
                    </div>
                </div>
            </nav>

            <header className="pt-32 md:pt-48 pb-12 md:pb-24 px-4 md:px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-[3px] border-black neo-card-accent reveal">
                        <div className="lg:col-span-8 p-6 md:p-16 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black bg-white">
                            <div className="inline-block px-4 py-1 bg-[var(--neo-accent)] text-white font-bold text-xs mb-6 md:mb-8">
                                STATUS: AVAILABLE_FOR_HIRE
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl leading-none mb-6 md:mb-8 break-words">
                                DIGITAL<br /><span className="accent-text">PRODUCT</span><br />EXPERT
                            </h1>
                            <p className="text-base md:text-xl text-slate-600 max-w-xl leading-relaxed mb-8 md:mb-12 font-medium">
                                // BUILDING HIGH-END DIGITAL SYSTEMS THROUGH TECHNICAL PRECISION AND RAW AESTHETICS.
                            // NO FRILLS. JUST RESULTS.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <a className="neo-button text-base md:text-lg justify-center sm:justify-start" href="#work">PROJECT_INDEX</a>
                                <a className="neo-button-secondary text-base md:text-lg justify-center sm:justify-start" href="#about">CORE_DATA</a>
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-white flex flex-col">
                            <div className="flex-1 min-h-[300px] md:min-h-[400px]">
                                <img alt="Profile" className="w-full h-full object-cover grayscale brightness-90 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-500 cursor-crosshair" src={headshot} />


                            </div>
                            <div className="p-6 md:p-8 border-t-[3px] border-black text-black">
                                <div className="grid grid-cols-2 gap-4 md:gap-8">
                                    <div>
                                        <div className="text-3xl md:text-4xl font-['Archivo_Black']">10+</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest">Years_Exp</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl md:text-4xl font-['Archivo_Black']">150+</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest">Completed_Units</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-12 px-4 md:px-6 border-y-[3px] border-black bg-white">
                <div className="max-w-7xl mx-auto overflow-hidden">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 text-black opacity-80 text-center">
                        <span className="text-xl md:text-3xl font-black tracking-tighter">APPLE.SYSTEMS</span>
                        <span className="text-xl md:text-3xl font-black tracking-tighter">TESLA.GRID</span>
                        <span className="text-xl md:text-3xl font-black tracking-tighter">STRIPE.CORE</span>
                        <span className="text-xl md:text-3xl font-black tracking-tighter">FIGMA.UI</span>
                        <span className="text-xl md:text-3xl font-black tracking-tighter md:block hidden">NOTION.LABS</span>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-6" id="services">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:mb-20 border-l-[6px] md:border-l-[8px] border-[var(--neo-accent)] pl-6 md:pl-8 reveal">
                        <h2 className="text-3xl md:text-5xl mb-4">CAPABILITIES_</h2>
                        <p className="text-slate-500 max-w-md uppercase text-xs md:text-sm font-bold tracking-widest">Full-spectrum technical protocols for digital dominance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 reveal">
                        <div className="neo-card p-8 md:p-10 flex flex-col h-full hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[var(--neo-accent)] text-white flex items-center justify-center mb-8 border-[3px] border-black">
                                <span className="material-symbols-outlined font-bold text-3xl">terminal</span>
                            </div>
                            <h3 className="text-xl md:text-2xl mb-6">WHAT_I_DO_</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
                                I provide a complete range of digital solutions to help your business thrive in the modern landscape.
                            </p>
                            <div className="pt-6 border-t-[2px] border-black/10 space-y-3">
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> WEBSITE_DEVELOPMENT</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> SEO_OPTIMIZATION</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> DIGITAL_MARKETING</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> APP_DEVELOPMENT</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> COMPLETE_BRANDING</div>
                            </div>
                        </div>
                        <div className="neo-card p-8 md:p-10 flex flex-col h-full hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[var(--neo-accent)] text-white flex items-center justify-center mb-8 border-[3px] border-black">
                                <span className="material-symbols-outlined font-bold text-3xl">groups</span>
                            </div>
                            <h3 className="text-xl md:text-2xl mb-6">WHOM_I_WORK_WITH_</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
                                I collaborate with ambitious clients globally to deliver high-impact digital experiences.
                            </p>
                            <div className="pt-6 border-t-[2px] border-black/10 space-y-3">
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> LOCAL_&_FOREIGN_BIZ</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> ENTREPRENEURS</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> INDIVIDUALS</div>
                            </div>
                        </div>
                        <div className="neo-card p-8 md:p-10 flex flex-col h-full hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[var(--neo-accent)] text-white flex items-center justify-center mb-8 border-[3px] border-black">
                                <span className="material-symbols-outlined font-bold text-3xl">verified</span>
                            </div>
                            <h3 className="text-xl md:text-2xl mb-6">WHY_CHOOSE_ME_</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium italic">
                                "// I help my clients save valuable time by providing an all-in-one digital ecosystem. Instead of juggling multiple providers, you get a unified bundle that covers every essential need to build a formidable digital presence for your business."
                            </p>
                            <div className="pt-6 border-t-[2px] border-black/10 space-y-3">
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> ALL-IN-ONE_SERVICE</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> TIME_EFFICIENCY</div>
                                <div className="flex items-center gap-3 text-xs font-bold"><span className="w-2 h-2 bg-[var(--neo-accent)]"></span> UNIFIED_STRATEGY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-6 bg-black text-white" id="work">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 border-b-[6px] md:border-b-[8px] border-white pb-8 gap-6 reveal">
                        <div>
                            <h2 className="text-4xl md:text-6xl mb-2 text-white">SELECTED_WORK_</h2>
                            <p className="uppercase font-bold tracking-tighter text-xs md:text-sm">Deployment History // Sector: Public</p>
                        </div>
                        <a className="neo-button text-sm w-full md:w-auto justify-center" href="#">
                            EXTRACT_ALL_DATA
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 reveal">
                        {[
                            {
                                title: "AURORA_FINANCE.EXE",
                                tags: ["APP", "WEBSITE"],
                                desc: "Next-gen fintech dashboard with real-time analytics and predictive wealth management protocols.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPLOGGDIxywr43NY4L04e1hzbsXtPIydsL-HnTDo0oCO8_k_OH_Ty4MyKDpPv4fMzEoQ1PuYfGjhjNIYJ6vRoKCy6nOJ5lFESz95LmgDJW0UzR2c6biTdSwARlfKwSHNH2s90eSlD__mX_fDNPdv3rtkz0_k9KVOsyrut-vN9iA36lx31AXyjxVPu5XIJKcnOwF60_h5gG-vL20xNhkXgbUzk2HSmjK9mUVrpm_eFJ3s3Y1_aOl1dK-9J6csLJTYgJBUz0oY7Tzq8f"
                            },
                            {
                                title: "NEXUS_INFRA.SYS",
                                tags: ["TOOLS", "MARKETING"],
                                desc: "Automated cloud infrastructure deployment engine for high-scale enterprise operations.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvnmhZTC0E77ROLTqFJ_WgAVbisP6CpoGDPsCncvOP5xpEG1rDqccewLEFvm83wOHYdIf43BPpY0XwZCcgVo1cuw0i5w7Jb397Mn41ydisqsx5cKdOFmQY3NARYzey2AvhDRIRGjBiXVZF35nmwXQL-jRdWyUnNIbtSKGTcXzNNuRGOJIzGS5fDTlqXwEM5F9at61gL7nOljPVuBkEgyEhGntd7yLwr2eEp-2AMYdGt6h5g4bwR-6v2NhKQDBvCWTx5GlRZfml5JO1"
                            },
                            {
                                title: "ZENITH_RETAIL.NODE",
                                tags: ["WEBSITE", "BRANDING"],
                                desc: "Digital storefront optimization protocol focused on aggressive conversion and aesthetic dominance.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeG1XhoMUzZIOi8TMOphZxhI06Gz7YfG5U6x5BjD3V0D1DQySy3hZcKbKxlDemv8nYObU1KROD8rT69FyD_6GzrrV5-Bo1-bGnqOHXtTJju_py16pXbOlKl4xuejnbOwRHDxiKPEsiaYe6GwyT50xTQariS2OCzTaGC6qWaJJi6c0MaSd9kP4SMlAxPiJC4DMvEg7I-BTvjnIZG8xAe8fzSHoYI62yz7bg1spIkJns2Puv1JvgsM3a87Hua6KWQBOmsvwLnq-lB6Pj"
                            },
                            {
                                title: "ORBIT_COLLAB.V1",
                                tags: ["SEO", "TOOLS"],
                                desc: "High-performance collaborative workspace engine with integrated asset sync and precision versioning.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWfYk_h0SRDI5JCoRx6AfJkPtUOiLIQ5zYbr_RDBfynlyiTUnWn0AjtY7tVvPvKQ4ogelC22c-0xweChcxBnoxrSnuzpg8jxAsP4t8sch_ayNyd8BxeTecnPmdKvYf1IS8qdABoRncEyCdJlwuw7Q2MjTW1MlZ55vLsOPYW-g4adHo5_ZCTDrxZ3hQKc-Vmq9PUsa9W1KXyuRmpN3XYHCftJ86y-iFfQTmRwYPYFs8_iEeVeBe7yaj_OrihbDBxeZWUEjHReOb0c3y"
                            },
                            {
                                title: "PULSE_METRICS.LOG",
                                tags: ["MARKETING", "SEO"],
                                desc: "Advanced data visualization suite for tracking market penetration and organic visibility algorithms.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPLOGGDIxywr43NY4L04e1hzbsXtPIydsL-HnTDo0oCO8_k_OH_Ty4MyKDpPv4fMzEoQ1PuYfGjhjNIYJ6vRoKCy6nOJ5lFESz95LmgDJW0UzR2c6biTdSwARlfKwSHNH2s90eSlD__mX_fDNPdv3rtkz0_k9KVOsyrut-vN9iA36lx31AXyjxVPu5XIJKcnOwF60_h5gG-vL20xNhkXgbUzk2HSmjK9mUVrpm_eFJ3s3Y1_aOl1dK-9J6csLJTYgJBUz0oY7Tzq8f"
                            },
                            {
                                title: "CORE_GUIDE.DOC",
                                tags: ["BRANDING", "APP"],
                                desc: "Comprehensive design system documentation and component library for rapid technical deployment.",
                                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvnmhZTC0E77ROLTqFJ_WgAVbisP6CpoGDPsCncvOP5xpEG1rDqccewLEFvm83wOHYdIf43BPpY0XwZCcgVo1cuw0i5w7Jb397Mn41ydisqsx5cKdOFmQY3NARYzey2AvhDRIRGjBiXVZF35nmwXQL-jRdWyUnNIbtSKGTcXzNNuRGOJIzGS5fDTlqXwEM5F9at61gL7nOljPVuBkEgyEhGntd7yLwr2eEp-2AMYdGt6h5g4bwR-6v2NhKQDBvCWTx5GlRZfml5JO1"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer flex flex-col h-full">
                                <div className="neo-card-accent border-black border-[3px] bg-white p-0 relative shadow-[6px_6px_0px_0px_var(--neo-accent)] group-hover:shadow-[10px_10px_0px_0px_var(--neo-accent)] transition-all flex flex-col h-full">
                                    <div className="aspect-video overflow-hidden border-b-[3px] border-black">
                                        <img alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src={item.img} />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start gap-4 mb-4">
                                            <h3 className="text-lg md:text-xl leading-tight font-black">{item.title}</h3>
                                            <span className="material-symbols-outlined text-2xl group-hover:text-[var(--neo-accent)] transition-colors shrink-0">call_made</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="px-2 py-0.5 border-[2px] border-black text-[10px] font-bold bg-white">{tag}</span>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-6 border-y-[3px] border-black" id="about">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-[3px] border-black neo-card reveal">
                        <div className="bg-white p-6 md:p-12 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="col-span-2 border-[4px] border-black overflow-hidden aspect-[16/9]">
                                    <img alt="Me at work" className="w-full h-full object-cover grayscale brightness-90 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMrvkyD2Ez2M_9o7d3snPm_SDYUacCGZunsx3z7Fsdg_t0NOFaf9-doHhfIHt_7aflBctNBRsLNBobZemwxpdSkLg48cDok2KvX_oP0aJNGKjDP-oLx3V5Dor_eycW0zPwbA2qaR_7yh3S2uh8Y3GBcN5_GFdiAYvzNy3daXD17NX79dRijZIJTiSme5OOgWZ_H4VVH6OBkwHldpET-MLfdfp6loFeYI0ky6Am343TTjzRJzwoI2xvrC_kh4Jts3_xtCIM1XUSB3V" />
                                </div>
                                <div className="border-[4px] border-black overflow-hidden aspect-square">
                                    <img alt="Meeting" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyKnN778x60CYb0lQUySj6k-YZmGYT4XXHDxVAzRLx7bWjx3Ep4t4y6JO7PU47IBP7XH2l6JVEYHMI6tpf05cJhIwEpGeV7I6ah8UODcSVIWpCNXKt8Kb-2lQC3nOIt2lQjvk6JYOzwERnlsu7efSFcE_Ynvtn7VkXTA3KxEoevt8hVVP1ex2MfCuEuvodKN7CI3LzllgnDHS8ACmoHtg9n_HCz-YD7gofa4ewVD7h6L6Quy5DnOMHJ4gYvi0W3a24GPYwe4_cceSb" />
                                </div>
                                <div className="border-[4px] border-black overflow-hidden aspect-square">
                                    <img alt="Collaboration" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYEbT_7V3OcPB9kRDBfx9U1Jh7CpCWytfvrO51f_gp1qko9_JFdgu0KCygmJnPhr6Jnkfd84h_a_LQrbvXfkgr-9PxmTB0HWd9b73G9thSwkSvKzLgglzA8Oq5oFWoONM1WXGBI3uIxM7Oc0u0eFIowMOoSuMzBOMDdl99t43y54k7MQNGFkimWJM5Ps_3XsKaJg4l_-v8kbfLk0Y-NE12RPSqQzGexE5x2TpUW89ebPZxJnM-92XH34YCnpzYDdIqALfF-FzQ4OrK" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                            <h2 className="text-3xl md:text-4xl mb-6 md:mb-8 accent-text">CORE_BIOMETRICS_</h2>
                            <div className="space-y-6 text-slate-700 text-sm leading-relaxed mb-8 md:mb-10 font-medium">
                                <p>
                                    I AM A DIGITAL PRODUCT EXPERT ENGINEERED FOR COMPLEX SYSTEMS. MY PHILOSOPHY IS ROOTED IN RAW FUNCTIONALITY AND TECHNICAL PRECISION.
                                </p>
                                <p>
                                    I DON'T JUST DESIGN INTERFACES; I DESIGN LOGIC. I BUILD SCALABLE LIBRARIES, ESTABLISH RIGID GUIDELINES, AND OPTIMIZE WORKFLOWS FOR PEAK OPERATIONAL EFFICIENCY.
                                </p>
                            </div>
                            <div className="space-y-4 mb-8 md:mb-10">
                                <div className="flex items-center gap-4 bg-slate-100 p-4 border-l-4 border-[var(--neo-accent)]">
                                    <span className="material-symbols-outlined accent-text">bolt</span>
                                    <span className="text-xs font-bold uppercase tracking-wider">Freelance_Status: UNLOCKED</span>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-100 p-4 border-l-4 border-[var(--neo-accent)]">
                                    <span className="material-symbols-outlined accent-text">code</span>
                                    <span className="text-xs font-bold uppercase tracking-wider">Stack_Version: 2024.v2</span>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-100 p-4 border-l-4 border-[var(--neo-accent)]">
                                    <span className="material-symbols-outlined accent-text">verified</span>
                                    <span className="text-xs font-bold uppercase tracking-wider">Protocol: RESULTS_DRIVEN</span>
                                </div>
                            </div>
                            <a className="neo-button w-full justify-center" href="#">
                                ACCESS_FULL_JOURNAL
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-6" id="process">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-6xl mb-4">EXECUTION_LOG</h2>
                        <p className="text-[var(--neo-accent)] uppercase text-xs font-bold tracking-[0.5em]">Standard Operating Procedures</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="neo-card p-8 md:p-12 flex flex-col h-full hover:-translate-y-2 transition-all">
                            <div className="text-5xl md:text-6xl font-['Archivo_Black'] opacity-10 mb-6 md:mb-8 text-black">01</div>
                            <h4 className="text-xl md:text-2xl mb-4 accent-text">DISCOVERY_</h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                SCANNING THE LANDSCAPE. STAKEHOLDER DEBRIEFING. OBJECTIVE DEFINITION. REMOVING UNCERTAINTY FROM THE EQUATION.
                            </p>
                        </div>
                        <div className="neo-card p-8 md:p-12 flex flex-col h-full hover:-translate-y-2 transition-all">
                            <div className="text-5xl md:text-6xl font-['Archivo_Black'] opacity-10 mb-6 md:mb-8 text-black">02</div>
                            <h4 className="text-xl md:text-2xl mb-4 accent-text">BUILDING_</h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                CONSTRUCTING THE CORE. ITERATIVE PROTOTYPING. HIGH-FIDELITY EXECUTION. PUSHING PIXELS INTO SUBMISSION.
                            </p>
                        </div>
                        <div className="neo-card p-8 md:p-12 flex flex-col h-full hover:-translate-y-2 transition-all">
                            <div className="text-5xl md:text-6xl font-['Archivo_Black'] opacity-10 mb-6 md:mb-8 text-black">03</div>
                            <h4 className="text-xl md:text-2xl mb-4 accent-text">LAUNCH_</h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                SYSTEM STRESS TESTING. PERFORMANCE AUDIT. DEPLOYMENT TO PRODUCTION ENVIRONMENT. MISSION ACCOMPLISHED.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-white text-black border-t-[3px] border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="neo-card p-6 md:p-20 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-center gap-12 bg-white text-black shadow-[10px_10px_0px_0px_var(--neo-black)] md:shadow-[16px_16px_0px_0px_var(--neo-black)]">
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-2xl sm:text-4xl md:text-7xl mb-6 md:mb-8 leading-none break-words">READY_FOR_DEPLOYMENT?</h2>
                            <p className="text-slate-600 mb-8 md:mb-12 text-sm md:text-lg uppercase font-bold tracking-tight">
                                INITIALIZE PROJECT SEQUENCE. SEND YOUR SPECIFICATIONS.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                                <button className="neo-button text-sm md:text-lg w-full sm:w-auto justify-center" onClick={toggleModal}>
                                    <span className="material-symbols-outlined">mail</span>
                                    EMAIL_SERVER
                                </button>
                                <a className="neo-button-secondary text-sm md:text-lg w-full sm:w-auto justify-center" href="#">
                                    <span className="material-symbols-outlined">event</span>
                                    SYNC_CALENDAR
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
                                <a className="w-12 h-12 md:w-14 md:h-14 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all" href="#">
                                    <img alt="Dribbble" className="w-5 h-5 md:w-6 md:h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZHcHb5J78UvQunOusWxZ1Q_1i6GENzakooUByvvvRFByKW-EiVsxHTa81feyJOPKzGekrD6bLJQFdqaaqEyv_vqq3fspjewrgjKZ9Edths-2Ny60g_VTccMA3DCmOyV255jfvyXdAXvgL1EKt2OHnHAAs87F1mdAoXhPrgdj_8EMikK7nItVleMT2KfK4WvauKrJKJuNpBM5uQIlDFAXbGy6ZbGuasB-egTfDa0CJ5yQJ3_3HZWl2BcVQFri8FPTJiqllryTFIe4N" />
                                </a>
                                <a className="w-12 h-12 md:w-14 md:h-14 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all" href="#">
                                    <img alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7rzhh3Cz3pm8Xe3zxnUpKZxjSvsOPJ3eEanOhtLsq3-_W5Hl1lehRJFAGn4_9rRahsBQ2WCk94J8CACMtxoKdNLtgkHMnNld5UVH1DlxP5SSTA9qQiq4MEIE6Q-s0J8ovpCSCTnTEXfH94SqRE99uAVp6Jsxa07gk74o82IaB0Kn4y5DO-Y28wahsos7ftu882XCGMHzkFxU7p-rQ9rK9KGxl0_6SWzmCFdDF6Kk4kERj0Mtxb-AXDScN6XnBPgoba_s8tJ_tRpIt" />
                                </a>
                                <a className="w-12 h-12 md:w-14 md:h-14 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all" href="#">
                                    <img alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSQpHduNhtqOsCinxUrzYP7BSKibRcLRlT0XIeDkuP6NNJXUtyKQUFfcxX9wNsbEDhJtWOJxNOctcIhE08OKFC3xTfcsPfXoW3a3mqfhiJJ0TEflrHHa4x76nKtlorzPnGcPskKAquEijslVtO7NqJqXYIlddIE2XQ8ZDqUpsL69qUBOXZf2ctpPilgeu5OmZH76SRiENG9pNacY8wcd9va4RMXwx-b6NkZUBfg9E5IbrmeZxTUoGvGvx8gm_9yC2mZydG2QxhwEo_" />
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-auto grid grid-cols-2 gap-8 md:gap-16 text-xs font-black uppercase tracking-widest">
                            <div className="space-y-6">
                                <p className="accent-text opacity-100">_DIRECTORY</p>
                                <ul className="space-y-4">
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#services">SERVICES</a></li>
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#work">WORK</a></li>
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#about">ABOUT</a></li>
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#process">PROCESS</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <p className="accent-text">_RESOURCES</p>
                                <ul className="space-y-4">
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#">CURRICULUM</a></li>
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#">STUDIES</a></li>
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#">JOURNAL</a></li>
                                    <li><a className="hover:text-[var(--neo-accent)]" href="#">MENTORING</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t-[3px] border-black pt-8 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
                        <div className="flex items-center gap-4">
                            <div className="px-3 py-1 bg-black text-white font-bold">SHOVON DIGITAL</div>
                            © 2026 SHOVON DIGITAL // ALL_RIGHTS_RESERVED
                        </div>
                        <div className="accent-text">
                            ENCODED_WITH_PRECISION
                        </div>
                    </div>
                </div>
            </footer>
            <button className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-[var(--neo-accent)] border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_var(--neo-black)] md:shadow-[6px_6px_0px_0px_var(--neo-black)] z-50 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--neo-black)] md:hover:shadow-[8px_8px_0px_0px_var(--neo-black)] transition-all">
                <span className="material-symbols-outlined text-white font-bold">terminal</span>
            </button>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="neo-modal-overlay" onClick={toggleModal}>
                    <div className="neo-card max-w-2xl w-full p-6 md:p-10 relative bg-white" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 w-10 h-10 border-[3px] border-black flex items-center justify-center hover:bg-black hover:text-white transition-all z-10"
                            onClick={toggleModal}
                        >
                            <span className="material-symbols-outlined font-bold">close</span>
                        </button>

                        <div className="mb-8 border-l-[6px] border-[var(--neo-accent)] pl-6">
                            <h2 className="text-2xl md:text-4xl">INITIALIZE_CONTACT_</h2>
                            <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mt-2">Transmit your specifications to the core.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Transmission sequence initiated. (Backend integration pending)'); toggleModal(); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest px-1">_NAME*</label>
                                    <input type="text" required className="neo-input" placeholder="IDENTIFY YOURSELF" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest px-1">_EMAIL*</label>
                                    <input type="email" required className="neo-input" placeholder="COMM_CHANNEL@HOST.COM" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest px-1">_WHATSAPP_CONTACT (OPTIONAL)</label>
                                <input type="text" className="neo-input" placeholder="+1-XXX-XXX-XXXX" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest px-1">_MESSAGE*</label>
                                <textarea required rows="4" className="neo-input resize-none" placeholder="DESCRIBE YOUR OBJECTIVES..."></textarea>
                            </div>

                            <button type="submit" className="neo-button w-full justify-center py-4 text-lg">
                                <span className="material-symbols-outlined">send</span>
                                EXECUTE_TRANSMISSION
                            </button>
                        </form>

                        <div className="mt-10 pt-8 border-t-[3px] border-black flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex flex-col items-center md:items-start">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">DIRECT_LINK:</span>
                                <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                                    <span className="font-bold text-sm">hello@shovondigital.com</span>
                                    <button
                                        onClick={handleCopyEmail}
                                        className={`material-symbols-outlined text-xl transition-all ${emailCopied ? 'text-green-600 scale-125' : 'hover:text-[var(--neo-accent)] cursor-pointer'}`}
                                    >
                                        {emailCopied ? 'check_circle' : 'content_copy'}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center md:items-end">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">SOCIAL_PROTOCOLS:</span>
                                <div className="flex gap-4">
                                    {[
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            ),
                                            link: 'https://linkedin.com/in/shovondigital',
                                            label: 'LinkedIn'
                                        },
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            ),
                                            link: 'https://github.com/shovondigital',
                                            label: 'GitHub'
                                        },
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                                </svg>
                                            ),
                                            link: 'https://facebook.com/shovondigital',
                                            label: 'Facebook'
                                        },
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                            ),
                                            link: 'https://wa.me/yourwhatsappnumber',
                                            label: 'WhatsApp'
                                        }
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 border-[3px] border-black flex items-center justify-center hover:bg-[var(--neo-accent)] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                                            title={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;

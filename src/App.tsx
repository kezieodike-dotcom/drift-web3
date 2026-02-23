/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Wallet,
  Cpu,
  Rocket,
  ShieldCheck,
  Coins,
  Users,
  Award,
  Zap,
  ChevronRight,
  Play,
  Upload,
  Loader2,
  Sparkles,
  Globe,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
  Layout,
  Search,
  PenTool,
  Network,
  Activity,
  Milestone,
  Terminal,
  Database,
  Link,
  Lock,
  RefreshCw,
  Box,
  FileCode2,
  Server,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl cursor-pointer hover:rotate-12 transition-transform">D</div>
          <span className="font-display font-bold text-xl tracking-tight">DRIFT HUB</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#problem" className="hover:text-white transition-colors">Vision</a>
          <a href="#ai-engine" className="hover:text-white transition-colors">AI Engine</a>
          <a href="#launchpad" className="hover:text-white transition-colors">Launchpad</a>
          <a href="#token" className="hover:text-white transition-colors">$DRFT</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-semibold transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] group">
            <Wallet size={16} className="group-hover:rotate-12 transition-transform" />
            <span>Connect Wallet</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 glass rounded-lg text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-sm font-medium">
              <a href="#problem" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Vision</a>
              <a href="#ai-engine" onClick={() => setIsOpen(false)} className="hover:text-blue-400">AI Engine</a>
              <a href="#launchpad" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Launchpad</a>
              <a href="#token" onClick={() => setIsOpen(false)} className="hover:text-blue-400">$DRFT</a>
              <a href="#architecture" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Architecture</a>
              <button className="flex sm:hidden items-center justify-center gap-2 px-5 py-3 bg-blue-600 rounded-xl font-bold">
                <Wallet size={16} />
                <span>Connect Wallet</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] text-blue-400 mb-8 uppercase border border-blue-500/20">
            Decentralized Intelligence Infrastructure
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9] text-white">
            Build the Future With AI.<br />
            <span className="text-gradient">Own It With Web3.</span>
          </h1>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            DRIFT HUB is a decentralized AI-powered innovation ecosystem where ideas are validated, funded, governed, and scaled transparently on-chain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
              Enter DRIFT HUB <ChevronRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95">
              Explore the Ecosystem
            </button>
          </div>

          <p className="mt-12 text-sm text-white/40 font-medium tracking-wide">
            Turn concepts into systems. Tokenize innovation. Access AI tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Innovation Is <br />
              <span className="text-red-500/80">Broken.</span>
            </h2>
            <div className="space-y-4">
              {[
                { label: "AI is centralized", icon: ShieldAlert },
                { label: "Startup funding lacks transparency", icon: ShieldAlert },
                { label: "Communities have no real ownership", icon: ShieldAlert }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/60">
                  <item.icon size={20} className="text-red-500/50" />
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldAlert size={120} />
            </div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 relative z-10">
              Brilliant ideas die because trust, funding, and infrastructure are fragmented.
              <br /><br />
              The world doesn’t need another tool. <br />
              <span className="text-white font-bold italic">It needs a decentralized innovation engine.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 md:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Introducing DRIFT HUB</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light">
            DRIFT HUB merges Artificial Intelligence with blockchain technology to create a secure ecosystem where:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: "AI-Validated", desc: "Ideas are analyzed and verified by advanced models." },
            { title: "Tokenized", desc: "Projects are represented as liquid on-chain assets." },
            { title: "Milestone-Control", desc: "Funding is locked and released only on success." },
            { title: "Community-Driven", desc: "Decisions are made by the people using the hub." },
            { title: "Participant Owned", desc: "Value stays with the builders and investors." },
            { title: "Secure Data", desc: "Decentralized storage and privacy-first AI." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
              <CheckCircle2 className="text-emerald-500 mb-4" size={24} />
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-6 md:gap-12 text-white/30 font-bold tracking-widest uppercase text-[10px] md:text-sm">
            <span>Built on:</span>
            <div className="flex gap-4 md:gap-8">
              <span className="hover:text-white transition-colors">Ethereum</span>
              <span className="hover:text-white transition-colors">Polygon</span>
            </div>
          </div>
          <div className="text-center italic text-white/60 text-base md:text-lg px-4">
            "This isn’t Web3 hype. This is infrastructure."
          </div>
          <button className="px-10 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            Discover How It Works <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const AIEngineSection = () => {
  return (
    <section id="ai-engine" className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 block underline decoration-blue-500 decoration-2 underline-offset-4">AI Innovation Engine</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 italic">Intelligence That <br /> Builds With You</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
              Inside DRIFT HUB lives a powerful AI engine designed for builders and innovators. Every interaction is powered by the DRFT token — giving value back to the ecosystem.
            </p>
            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              Access the AI Engine <Sparkles size={18} />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Search, title: "Validate Idea", desc: "AI-driven market analysis" },
              { icon: Layout, title: "Architecture", desc: "Generate MVP structures" },
              { icon: Activity, title: "Tokenomics", desc: "Simulate economic models" },
              { icon: ShieldCheck, title: "Risk Audit", desc: "Smart contract scanning" },
              { icon: PenTool, title: "Pitch Decks", desc: "Instant visual decks" },
              { icon: Network, title: "Infrastructure", desc: "Auto-deployment scripts" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-2xl border border-white/5 transition-all cursor-default"
              >
                <item.icon className="text-blue-400 mb-4" size={24} />
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-[11px] text-white/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LaunchpadSection = () => {
  return (
    <section id="launchpad" className="py-16 md:py-32 bg-blue-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Launch With Transparency</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed font-light">
              Founders can submit AI-powered, Web3-driven projects directly to the community. Funding has never been this transparent.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "Investors fund through smart contracts",
                "Milestones unlock capital progressively",
                "DAO governance ensures total accountability"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </div>
                  <span className="font-medium text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl">
                Launch a Project
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all border border-blue-400/30">
                Explore Active Projects
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass bg-white/10 p-1 md:p-2 rounded-[2rem] border-white/20 shadow-2xl"
            >
              <div className="bg-[#050505] rounded-[1.8rem] overflow-hidden aspect-[4/5] p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg" />
                    <div>
                      <h4 className="font-bold text-xs md:text-sm underline decoration-blue-500">Project Orion</h4>
                      <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold">AI Compute Layer</p>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 md:px-3 md:py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest border border-emerald-500/30">
                    Live
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] md:text-xs mb-2">
                      <span className="text-white/40 uppercase tracking-widest font-bold">Progress</span>
                      <span className="font-bold">78%</span>
                    </div>
                    <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-[78%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Raised</p>
                      <p className="text-base md:text-lg font-bold">450k <span className="text-[10px] text-blue-400">USDC</span></p>
                    </div>
                    <div className="p-3 md:p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Backers</p>
                      <p className="text-base md:text-lg font-bold">1,240</p>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Milestone size={14} className="text-blue-400 md:w-4 md:h-4" />
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-blue-400">Current Milestone</span>
                    </div>
                    <p className="text-[10px] md:text-xs font-medium">Phase 1: Neural Engine Alpha Release</p>
                  </div>

                  <button className="w-full py-3 md:py-4 bg-white text-black rounded-xl font-bold text-xs md:text-sm tracking-tight active:scale-[0.98] transition-transform">
                    Invest Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tokenomics = () => {
  const allocations = [
    { label: 'Community Incentives', value: 30, color: 'bg-blue-500' },
    { label: 'AI Development', value: 20, color: 'bg-indigo-500' },
    { label: 'Ecosystem Grants', value: 20, color: 'bg-emerald-500' },
    { label: 'Liquidity', value: 15, color: 'bg-purple-500' },
    { label: 'Team', value: 10, color: 'bg-pink-500' },
    { label: 'Treasury', value: 5, color: 'bg-amber-500' },
  ];

  return (
    <section id="token" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[150px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 block underline decoration-blue-500 decoration-2 underline-offset-4">DRFT Tokenomics</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">Fuel the Ecosystem. <br /> Own the Future.</h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed font-light">
            The DRFT token powers everything inside DRIFT HUB. This is not just utility. This is digital ownership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 underline decoration-blue-500 underline-offset-8">Token Allocation</h3>
            {allocations.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium text-white/70">{item.label}</span>
                  <span className="font-bold">{item.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={`h-full ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Unlock AI Tools", desc: "Access the innovation engine" },
              { title: "Launchpad Funding", desc: "Back projects with DRFT" },
              { title: "Stake Rewards", desc: "Earn passive yield" },
              { title: "Governance Voting", desc: "Shape the ecosystem" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="glass p-6 md:p-8 rounded-[2rem] border border-white/5 bg-white/[0.03] transition-all"
              >
                <Coins className="text-blue-400 mb-4" size={24} />
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
            <div className="col-span-1 sm:col-span-2">
              <button className="w-full py-5 bg-white text-black rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-[0.99] text-sm">
                View Detailed Tokenomics <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemArchitecture = () => {
  const [activeStep, setActiveStep] = useState(0);

  const flows = [
    { title: "System Flow", desc: "High-level architecture from User to Blockchain.", icon: Network },
    { title: "AI Metering", desc: "Off-chain compute with on-chain settlement.", icon: Terminal },
    { title: "Escrow Logic", desc: "Milestone-based decentralized funding.", icon: Lock }
  ];

  const terminalLines = [
    { text: "> initializing drift_hub_core...", color: "text-white/40" },
    { text: "> check_wallet_auth: SUCCESS (0x71C...a3f)", color: "text-emerald-500" },
    { text: "> verify_token_holding: 1,500 DRFT (STAKED)", color: "text-emerald-500" },
    { text: "> executing_ai_request: 'market_analysis'...", color: "text-blue-400" },
    { text: "> compute_latency: 124ms", color: "text-white/40" },
    { text: "> generate_ipfs_hash: QmXoyp...3p", color: "text-blue-400" },
    { text: "> settle_on_chain: BLOCK #1928475", color: "text-emerald-500" },
    { text: "> access_granted.", color: "text-emerald-500 font-bold" }
  ];

  return (
    <section id="architecture" className="py-16 md:py-32 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 block underline decoration-blue-500 decoration-2 underline-offset-4">Technical Blueprint</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tighter">System Architecture</h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed italic font-light">
            "AI runs off-chain. Value settles on-chain. Governance controls ecosystem."
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Nav */}
          <div className="lg:col-span-3 space-y-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-2">
            {flows.map((flow, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full p-4 md:p-6 rounded-2xl text-left transition-all flex items-center gap-4 ${activeStep === i ? 'bg-blue-600 text-white shadow-xl lg:translate-x-2' : 'glass text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <flow.icon size={20} className="shrink-0" />
                <div>
                  <h4 className="font-bold text-[10px] md:text-sm tracking-tight">{flow.title}</h4>
                  <p className={`hidden lg:block text-[10px] leading-tight mt-1 ${activeStep === i ? 'text-white/70' : 'text-white/20'}`}>{flow.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Visual Container */}
          <div className="lg:col-span-9 bg-[#050505] rounded-[2rem] md:rounded-[3rem] p-0.5 md:p-1 border border-white/5 shadow-2xl min-h-[400px] md:min-h-[500px] flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 p-4 md:p-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
              </div>
              <span className="text-[8px] md:text-[10px] font-mono text-white/20 ml-2 md:ml-4 font-bold tracking-widest uppercase truncate">drift_system_visualizer_v3.1</span>
            </div>

            <div className="flex-1 p-6 md:p-12 relative flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="flow-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative"
                  >
                    {[
                      { icon: Wallet, label: "User Wallet", desc: "Auth via Signature" },
                      { icon: Server, label: "DRIFT API", desc: "Auth Layer" },
                      { icon: Database, label: "Blockchain", desc: "Poly/Eth State" },
                      { icon: Cpu, label: "AI Compute", desc: "Off-chain Engine" }
                    ].map((step, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-2 md:gap-4 relative z-10 group shrink-0">
                          <div className="w-14 h-14 md:w-20 md:h-20 glass rounded-2xl md:rounded-[2rem] flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform group-hover:border-blue-500/40">
                            <step.icon size={24} className="md:w-8 md:h-8" />
                          </div>
                          <div className="text-center">
                            <h5 className="font-bold text-[9px] md:text-xs">{step.label}</h5>
                            <p className="hidden md:block text-[10px] text-white/30">{step.desc}</p>
                          </div>
                        </div>
                        {i < 3 && (
                          <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20 relative">
                            <motion.div
                              animate={{ left: ["0%", "100%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full blur-md"
                            />
                          </div>
                        )}
                        {i < 3 && (
                          <div className="md:hidden w-[2px] h-6 bg-blue-500/20" />
                        )}
                      </React.Fragment>
                    ))}
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="flow-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full max-w-2xl bg-black/50 rounded-2xl p-4 md:p-8 font-mono text-[10px] md:text-xs border border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-4 md:mb-6 text-white/20 border-b border-white/5 pb-2 md:pb-4">
                      <Terminal size={14} />
                      <span className="font-bold tracking-widest uppercase">DRIFT METERING ENGINE</span>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {terminalLines.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className={line.color}
                        >
                          {line.text}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="flow-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="w-full grid md:grid-cols-3 gap-4 md:gap-8"
                  >
                    {[
                      { icon: Coins, label: "Escrow Deposit", sub: "Investors lock funds" },
                      { icon: CheckCircle2, label: "Milestone Verified", sub: "DAO verifies proof" },
                      { icon: RefreshCw, label: "Capital Release", sub: "Founder receives funds" }
                    ].map((box, i) => (
                      <div key={i} className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center border-blue-500/10 hover:border-blue-500/40 transition-all group">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/10 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                          <box.icon size={24} className="md:w-7 md:h-7" />
                        </div>
                        <h5 className="font-bold text-xs md:text-sm mb-1 md:mb-2">{box.label}</h5>
                        <p className="text-[10px] text-white/40 leading-relaxed">{box.sub}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-4 md:p-8 bg-white/[0.02] border-t border-white/5">
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
                {[
                  { label: "Storage", val: "IPFS" },
                  { label: "Indexing", val: "Alchemy" },
                  { label: "Wallets", val: "MetaMask / Phantom" },
                  { label: "Compliance", val: "On-Chain Logs" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/20 font-bold mb-1">{stat.label}</span>
                    <span className="text-[10px] md:text-xs font-bold text-white/60">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GovernanceSection = () => {
  return (
    <section id="governance" className="py-16 md:py-32 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter italic">Govern What <br /> You Build</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg font-light">
              Stake DRFT. Vote on proposals. Shape the roadmap. Allocate treasury funds. DRIFT HUB is governed by its community — not a centralized authority.
            </p>
            <div className="flex items-center gap-6 mb-10">
              <div className="text-center px-4 md:px-8 border-r border-white/10">
                <p className="text-2xl md:text-3xl font-bold font-display">152</p>
                <p className="text-[8px] md:text-[10px] text-blue-400 uppercase tracking-widest font-bold">Proposals</p>
              </div>
              <div className="text-center px-4 md:px-8">
                <p className="text-2xl md:text-3xl font-bold font-display">42.5M</p>
                <p className="text-[8px] md:text-[10px] text-blue-400 uppercase tracking-widest font-bold">Staked DRFT</p>
              </div>
            </div>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-xl flex items-center justify-center gap-2 group text-sm">
              Join Governance <Users size={18} className="group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-4">
            {[
              { title: "Treasury Allocation", vote: "89% YES", status: "Executed" },
              { title: "Phase 3 Roadmap Update", vote: "94% YES", status: "Active" },
              { title: "New AI Model Integration", vote: "Pending", status: "Discussing" }
            ].map((item, i) => (
              <div key={i} className="glass p-5 md:p-6 rounded-2xl flex items-center justify-between border-blue-500/10 hover:border-blue-500/30 transition-all group">
                <div>
                  <h4 className="font-bold text-xs md:text-sm mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-white/30 uppercase tracking-[0.1em] font-bold">{item.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] md:text-xs font-bold text-white/50">{item.vote}</p>
                </div>
              </div>
            ))}
            <div className="p-6 md:p-8 bg-blue-600/5 rounded-3xl border border-blue-500/10 text-center italic text-white/40 text-sm">
              "Real power. On-chain."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NFTSection = () => {
  return (
    <section id="nft" className="py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">Proof of Contribution</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Earn on-chain reputation through Innovation Badges. Your contribution becomes permanent digital proof.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[
            { id: "01", icon: Zap, label: "Builder", color: "text-blue-400" },
            { id: "02", icon: Rocket, label: "Early Investor", color: "text-indigo-400" },
            { id: "03", icon: Sparkles, label: "AI Contributor", color: "text-emerald-400" },
            { id: "04", icon: Award, label: "Gov Leader", color: "text-purple-400" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-1 rounded-2xl md:rounded-[2.5rem] border-white/10 group cursor-pointer"
            >
              <div className="bg-[#050505] rounded-xl md:rounded-[2.3rem] aspect-square flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
                <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-5 transition-opacity ${item.color}`} />
                <div className="relative z-10 p-3 md:p-5 rounded-full glass border-white/5 group-hover:border-blue-500/20 transition-all mb-3 md:mb-6 group-hover:rotate-12">
                  <item.icon size={32} className={`${item.color} md:w-12 md:h-12`} />
                </div>
                <h4 className="font-bold text-center text-xs md:text-base tracking-tighter mb-1 relative z-10">{item.label} Badge</h4>
                <p className="text-[8px] md:text-[10px] text-white/30 font-mono relative z-10 uppercase tracking-widest italic">ID: #DRFT-REP-{item.id}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
            <span>Stored via:</span>
            <div className="flex items-center gap-2 text-white/60">
              <Box size={14} /> <span>IPFS</span>
            </div>
          </div>
          <button className="px-10 py-5 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl font-bold hover:bg-blue-600/20 transition-all active:scale-95 flex items-center gap-2 text-sm">
            <FileCode2 size={18} /> Earn Your Badge
          </button>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-32 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-20 italic">Three Steps to Enter the Future</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Connect Wallet", desc: "Unlock with MetaMask, Trust Wallet or Phantom", icon: Wallet },
            { step: "02", title: "Acquire & Stake", desc: "Unlock AI tools and governance rights", icon: Coins },
            { step: "03", title: "Build, Fund, Govern", desc: "Use AI, launch projects, and earn", icon: Rocket }
          ].map((item, i) => (
            <div key={i} className="relative group p-8 rounded-[2rem] hover:bg-white/[0.03] transition-all">
              {i < 2 && <div className="hidden md:block absolute top-[60px] left-[80%] w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent" />}
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 font-bold mb-8 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="w-full sm:w-auto px-14 py-6 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl active:scale-95">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

const WhySection = () => {
  return (
    <section className="py-16 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 block underline decoration-blue-500 decoration-2 underline-offset-4">Competitive Edge</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 italic tracking-tighter">Why We Win</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                "AI + Web3 Convergence",
                "Transparent Funding",
                "Tokenized Infrastructure",
                "Community Governance",
                "Builder-Focused",
                "Scalable Architecture"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <span className="font-bold text-[10px] tracking-widest uppercase text-white/70">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-light italic text-white/20 leading-tight"
            >
              "DRIFT HUB is not a platform."
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-blue-400 tracking-tighter"
            >
              It is a decentralized innovation layer.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

const RoadmapSection = () => {
  const phases = [
    { num: 1, title: "Engine & Launch", desc: "AI Engine + Token Launch" },
    { num: 2, title: "Growth & Scale", desc: "Launchpad + Staking" },
    { num: 3, title: "Activation", desc: "DAO Activation" },
    { num: 4, title: "Expansion", desc: "Cross-Chain Expansion" },
    { num: 5, title: "Final Node", desc: "Decentralized AI Compute Network" }
  ];

  return (
    <section id="roadmap" className="py-16 md:py-32 bg-white/[0.01] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 block underline decoration-blue-500 decoration-2 underline-offset-4">Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold italic tracking-tighter">The Road Ahead</h2>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all glass px-6 py-3 rounded-full border-white/10 self-start md:self-auto">
            Download PDF Roadmap
          </button>
        </div>

        <div className="space-y-4">
          {phases.map((phase) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phase.num * 0.1 }}
              className="glass p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group hover:bg-white/[0.05] transition-all border-white/5 cursor-default"
            >
              <div className="text-4xl md:text-6xl font-display font-bold text-blue-600/10 group-hover:text-blue-500/20 transition-colors w-16 md:w-24">
                0{phase.num}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base md:text-xl uppercase tracking-widest mb-1 italic">Phase {phase.num}</h4>
                <p className="text-base md:text-lg text-white/50 font-light">{phase.desc}</p>
              </div>
              <div className={`px-4 py-1 md:px-6 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all border ${phase.num === 1 ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white/5 text-white/30 border-transparent group-hover:border-white/10'}`}>
                {phase.num === 1 ? 'In Progress' : 'Planned'}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 hover:text-blue-300 transition-all inline-flex items-center gap-3">
            View Full Vision <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-blue-650">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-900 to-[#050505]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-9xl font-display font-bold tracking-tighter text-white mb-12 italic"
        >
          The Future <br /> Doesn’t Wait.
        </motion.h2>
        <p className="text-base md:text-2xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed font-light italic">
          Innovation is moving on-chain. Artificial intelligence is rewriting systems. DRIFT HUB sits at the intersection. If you’re building, investing, or governing the next generation of digital systems — this is your infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <button className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-white text-blue-700 rounded-2xl md:rounded-3xl font-bold text-lg md:text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all active:scale-95">
            Enter DRIFT HUB
          </button>
          <button className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 glass bg-white/5 text-white border-white/20 rounded-2xl md:rounded-3xl font-bold text-lg md:text-xl hover:bg-white/10 transition-all active:scale-95">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#050505] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <AIEngineSection />
        <Tokenomics />
        <LaunchpadSection />
        <SystemArchitecture />
        <GovernanceSection />
        <NFTSection />
        <HowItWorksSection />
        <WhySection />
        <RoadmapSection />
        <FinalCTASection />
      </main>

      <footer className="py-24 border-t border-white/5 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2 space-y-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-2xl md:text-3xl shadow-xl">D</div>
                <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter">DRIFT HUB</span>
              </div>
              <p className="text-white/30 max-w-sm mx-auto md:mx-0 text-base md:text-lg leading-relaxed italic font-light">
                Decentralized Intelligence Infrastructure.
                <br /><br />
                Built on blockchain. Powered by AI. Governed by community.
              </p>
              <div className="flex justify-center md:justify-start gap-4 md:gap-6">
                {['Twitter', 'Discord', 'Telegram', 'Github'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-white/10 hover:translate-y-[-4px] transition-all border-white/5">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-white/10 rounded-[6px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 text-center md:text-left">
              <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-blue-400">Platform</h4>
              <ul className="space-y-4 md:space-y-5 text-[10px] md:text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
                <li><a href="#" className="hover:text-white transition-colors">AI Engine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Launchpad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Governance</a></li>
              </ul>
            </div>

            <div className="space-y-6 md:space-y-10 text-center md:text-left">
              <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-blue-400">Resources</h4>
              <ul className="space-y-4 md:space-y-5 text-[10px] md:text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Assets</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] md:text-[9px] text-white/10 uppercase tracking-[0.4em] font-bold italic text-center">
            <p>© 2026 DRIFT HUB. All rights reserved.</p>
            <div className="flex gap-8 md:gap-12">
              <a href="#" className="hover:text-white transition-all underline underline-offset-4 decoration-white/0 hover:decoration-white/20">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all underline underline-offset-4 decoration-white/0 hover:decoration-white/20">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

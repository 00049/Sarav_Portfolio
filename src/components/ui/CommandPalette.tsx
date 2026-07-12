"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useMotionContext } from "@/components/motion/MotionProvider";
import { useCopyEmail } from "@/hooks/useCopyEmail";
import { Download, Copy, Check, Home, FolderKanban, User, Mail, Sparkles, Search } from "lucide-react";
import { resumeUrl } from "@/lib/data/site";

// Context
interface CommandPaletteContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommandPaletteContext = React.createContext<CommandPaletteContextType>({
  open: false,
  setOpen: () => {},
});

export const useCommandPalette = () => React.useContext(CommandPaletteContext);

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandPalette />
    </CommandPaletteContext.Provider>
  );
}

function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const { isReducedMotion } = useMotionContext();
  const { copied, copyEmail } = useCopyEmail(() => setOpen(false));

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, [setOpen]);

  // Motion variants - respects isReducedMotion
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15 } }
  };
  
  const contentVariants: Variants = {
    hidden: { opacity: 0, scale: isReducedMotion ? 1 : 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.15, ease: "easeOut" as const } 
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
               suppressHydrationWarning />
            </Dialog.Overlay>
            
            <Dialog.Content asChild>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="fixed top-[50%] left-[50%] z-[9999] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl border border-zinc-800 bg-[#0A0A0F] shadow-2xl"
               suppressHydrationWarning>
                <Command 
                  className="w-full text-zinc-300"
                  label="Command Menu"
                  loop
                >
                  <div className="flex items-center border-b border-zinc-800 px-4" cmdk-input-wrapper="">
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <Command.Input 
                      placeholder="Type a command or search..." 
                      className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm !outline-none !ring-0 placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 text-white" 
                      style={{ outline: "none", boxShadow: "none", border: "none" }}
                    />
                  </div>
                  
                  <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 text-zinc-300">
                    <Command.Empty className="py-6 text-center text-sm text-zinc-500">No results found.</Command.Empty>
                    
                    <Command.Group heading="Navigate" className="px-2 py-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500">
                      <Command.Item onSelect={() => runCommand(() => router.push("/"))} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        <Home className="mr-2 h-4 w-4" />
                        <span>Home</span>
                      </Command.Item>
                      <Command.Item onSelect={() => runCommand(() => router.push("/work"))} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        <FolderKanban className="mr-2 h-4 w-4" />
                        <span>Work</span>
                      </Command.Item>
                      <Command.Item onSelect={() => runCommand(() => router.push("/skills"))} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Skills</span>
                      </Command.Item>
                      <Command.Item onSelect={() => runCommand(() => router.push("/about"))} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        <User className="mr-2 h-4 w-4" />
                        <span>About</span>
                      </Command.Item>
                      <Command.Item onSelect={() => runCommand(() => router.push("/contact"))} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Contact</span>
                      </Command.Item>
                    </Command.Group>
                    
                    <Command.Group heading="Actions" className="mt-2 px-2 py-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500">
                      <Command.Item onSelect={() => runCommand(() => { window.open(resumeUrl, '_blank'); })} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download Resume</span>
                      </Command.Item>
                      <Command.Item onSelect={copyEmail} className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-800 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors">
                        {copied ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Copy className="mr-2 h-4 w-4" />}
                        <span>{copied ? "Copied!" : "Copy Email"}</span>
                      </Command.Item>
                    </Command.Group>
                  </Command.List>
                </Command>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, EllipsisVertical, Wallpaper } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed w-full flex justify-center items-center h-24 px-5 z-50">
      <div className="hidden sm:flex justify-between bg-background/20 backdrop-blur items-center p-2 rounded-full shadow hover:shadow-xl transition-all z-50">
        <Button className="rounded-full" variant="nav">
          <h1 className="font-medium text-base tracking-tighter text-accent-foreground">
            ⚡Digitalin Bisnis
          </h1>
        </Button>
        <Button className="rounded-full" variant="nav">
          <p>Pilih Desain</p>
        </Button>
        <Button className="rounded-full" variant="nav">
          <p>Harga</p>
        </Button>
        <Button className="rounded-full" variant="nav">
          <p>Option 1</p>
        </Button>
      </div>
      <div className="flex items-center justify-between w-full absolute top-5 block sm:hidden px-5">
        <Button variant="primary" className="rounded-full">
          ⚡Digitalin Bisnis
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="primary" size="icon" className="rounded-xl">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background/30 backdrop-blur border-0">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone.
                </SheetDescription>
              </VisuallyHidden>
              <div>
                <Button variant="primary" className="rounded-full">
                  {/* <div className="w-8 h-8">
                    <Image
                    src="/assets/images/logo2.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                    />
                    </div> */}
                  ⚡Digitalin Bisnis
                </Button>
              </div>
            </SheetHeader>
            <div className="w-full border-y border-zinc-400 divide-y divide-zinc-400">
              <Button
                variant="ghost"
                className="w-full rounded-none h-20 text-base"
              >
                Pilih Desain
              </Button>
              <Button
                variant="ghost"
                className="w-full rounded-none h-20 text-base"
              >
                Harga
              </Button>
              <Button
                variant="ghost"
                className="w-full rounded-none h-20 text-base"
              >
                Option 1
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

import Image from "next/image"

import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogTrigger,
    DialogContent

} from "@/components/ui/dialog"

import { CreateOrganization } from "@clerk/nextjs"

export const EmptyOrg = ()=>{
    return(
        <div className=" h-full flex flex-col items-center justify-center">
            <Image
            src="/elements.svg"
            alt="Empty"
            height={200}
            width={200}
            />
            <h2 className=" text-2xl font-semibold mt-6">
                Welcome To Board
            </h2>
            <p className=" text-muted-foreground text-sm mt-2 mb-4">
                Create An Organization To Get Started
            </p>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create Organization

                        </Button>
                    </DialogTrigger>
                    <DialogContent className=" p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization/>

                    </DialogContent>
                </Dialog>
            </div>


        </div>
    )
}
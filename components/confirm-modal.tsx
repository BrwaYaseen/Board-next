"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"


interface ConfrimModalProps{
    children:React.ReactNode;
    onConfirm:()=>void;
    disabled:boolean;
    header:string;
    discription:string;
};
 

export const ConfirmModal = ({
    children,
    onConfirm,
    disabled,
    discription,
    header,
}:ConfrimModalProps) =>{
    const handleConfirm = ()=> {
        onConfirm()
    }
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {discription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                    disabled={disabled}
                    onClick={onConfirm}
                    >Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>




        </AlertDialog>
    );

};

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ModalProps = {
  isOpen?: boolean;
  dialogTrigger: React.ReactNode;
  children?: React.ReactNode;
  dialogTitle?: React.ReactNode;
  className?: string;
};

const CustomModal = ({
  isOpen,
  dialogTrigger,
  dialogTitle,
  children,
  className,
}: ModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent
        className={`
          ${className} rounded-xl`}
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {dialogTitle}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;

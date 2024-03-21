import { successCopiedToast } from "@/lib/customToast";

const useCopyToClipBoard = () => {
    const copyToClipboard = (content: string) => {
        navigator.clipboard.writeText(content).then(() => {
            successCopiedToast();
        });
    };

    return { copyToClipboard };
};

export default useCopyToClipBoard;

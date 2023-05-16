import { Share, Alert } from "react-native";

const fixDate = (date: string | undefined) => {
    let newDateArray = [];
    newDateArray = date!.split("-");
    newDateArray.reverse();
    return newDateArray.join("/");
} 

const onShare = async (title: string | undefined, overview: string | undefined) => {
    try {
        const result = await Share.share({
          message: `Estou assistindo ${title}, que encontrei graças ao Ploomovies 👌\n\nSinopse: ${overview}`,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                console.log("Tipo de atividade: " + result.activityType);
            } else {
                console.log("Compartilhado");
            }
        } else if (result.action === Share.dismissedAction) {
            console.log("Descartado");
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
}

export default { fixDate, onShare }
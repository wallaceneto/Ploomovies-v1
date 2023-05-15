import { ActivityIndicator } from "react-native";
import theme from "../../global/styles/theme";

const loadingIndicator = (isLoading: boolean) => {
    return isLoading ? (
        <ActivityIndicator size={32} color={theme.primaryColor} />
    ) : null;
}

export default { loadingIndicator };
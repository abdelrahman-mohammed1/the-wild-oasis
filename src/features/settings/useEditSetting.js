import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Setting successfully edit "),
        queryClient.invalidateQueries({
          queryKey: ["settings"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editSetting };
}

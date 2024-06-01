"use client"

import { useMutation } from "@tanstack/react-query";
import useSupabase from "@/hooks/useSupabase";
import { RiskAnalysis } from "@/lib/types";

const useAddRiskAnalysis = () => {
    const supabase = useSupabase();

    return useMutation({
      mutationFn: async (riskAnalysisData: RiskAnalysis["Insert"]) => {
        const { data, error } = await supabase
            .from("risk_analysis")
            .insert(riskAnalysisData)
            .select()
            .single();
        
        if (error) {
            throw error;
        }

        return data;
      }
    });
}

export default useAddRiskAnalysis;
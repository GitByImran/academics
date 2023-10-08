import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

interface DataType {
  id: number;
  teacher: {
    name: string;
    experience: string;
    position: string;
  };
  course: {
    name: string;
    duration: string;
  };
  schedule: {
    weekly_class_day: string;
    weekly_class_hour: string;
  };
  enrolled_students: number;
  playlist: string[];
  courseReview: string;
  courseFeedback: string;
  coursePrice: string;
}

interface ProviderContextType {
  data: DataType[];
}

const ProviderContext = React.createContext<ProviderContextType | undefined>(
  undefined
);

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, isLoading, isError, refetch } = useQuery<DataType[], Error>(
    ["academicsData"],
    async () => {
      const response = await fetch("/academicsData.json");
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      return response.json();
    }
  );

  const contextValue: ProviderContextType = {
    data: data || [],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <ProviderContext.Provider value={contextValue}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;

export const useProvider = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error("useProvider must be used within a Provider");
  }

  return context;
};

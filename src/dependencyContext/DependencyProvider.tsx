import React, { useState, useContext, createContext, ReactNode } from "react";
import { TLogService } from "../types";
import { logService } from "./logService";

interface IDependencyProviderProps {
	children: ReactNode;
}

interface IDependencyContext {
	shouldLog: boolean;
	setShouldLog: React.Dispatch<React.SetStateAction<boolean>>;
	logService: TLogService;
}

export const DependencyContext = createContext<IDependencyContext>(
	{} as IDependencyContext
);

export const useDependency = (): IDependencyContext => {
	return useContext(DependencyContext);
};

const DependencyProvider = ({
	children,
}: IDependencyProviderProps): JSX.Element => {
	const [shouldLog, setShouldLog] = useState(true);

	const value: IDependencyContext = {
		shouldLog,
		setShouldLog,
		logService,
	};

	return (
		<DependencyContext.Provider value={value}>
			{children}
		</DependencyContext.Provider>
	);
};

export default DependencyProvider;

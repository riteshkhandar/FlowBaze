import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "../ui/card";

export function ValidationStatus({ title, isValid }) {
  return (
    <Card
      className={cn(
        "bg-card border",
        isValid ? "border-green-200 dark:border-green-800" : "border-red-200 dark:border-red-800",
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isValid ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
            <span className="font-medium text-card-foreground">{title}</span>
          </div>
          <span
            className={cn(
              "text-sm font-medium px-2 py-1 rounded-full",
              isValid
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
            )}
          >
            {isValid ? "Valid" : "Invalid"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

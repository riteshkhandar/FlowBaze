import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ValidationMessages({ title, messages }) {
  if (messages.length === 0) return null;

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-card-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {messages.map((msg, idx) => (
            <li key={idx} className="flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{msg}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

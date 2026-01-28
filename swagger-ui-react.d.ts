declare module 'swagger-ui-react' {
  import React from 'react';

  interface SwaggerUIProps {
    url?: string;
    urls?: Array<{ url: string; name: string }>;
    deepLinking?: boolean;
    presets?: any[];
    plugins?: any[];
    layout?: string;
    defaultModelsExpandDepth?: number;
    defaultModelExpandDepth?: number;
    docExpansion?: 'list' | 'full' | 'none';
    showRequestHeaders?: boolean;
    supportedSubmitMethods?: string[];
    filter?: boolean | string;
    validatorUrl?: string | null;
    withCredentials?: boolean;
    persistAuthorization?: boolean;
    displayOperationId?: boolean;
    onComplete?: (system: any) => void;
  }

  const SwaggerUI: React.FC<SwaggerUIProps>;
  export default SwaggerUI;
}

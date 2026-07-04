import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 w-fit">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-2" />}
            <button
              onClick={item.onClick}
              disabled={isLast}
              className={`hover:text-cyan-400 transition-colors ${
                isLast ? 'text-cyan-400 font-semibold cursor-default' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
            {!isLast && <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />}
          </div>
        );
      })}
    </nav>
  );
}

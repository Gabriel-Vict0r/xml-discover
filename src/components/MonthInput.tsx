"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const months = [
  {
    value: "Janeiro",
    label: "Janeiro",
  },
  {
    value: "Fevereiro",
    label: "Fevereiro",
  },
  {
    value: "Março",
    label: "Março",
  },
  {
    value: "Abril",
    label: "Abril",
  },
  {
    value: "Maio",
    label: "Maio",
  },
  {
    value: "Junho",
    label: "Junho",
  },
  {
    value: "Julho",
    label: "Julho",
  },
  {
    value: "Agosto",
    label: "Agosto",
  },
  {
    value: "Setembro",
    label: "Setembro",
  },
  {
    value: "Outubro",
    label: "Outubro",
  },
  {
    value: "Novembro",
    label: "Novembro",
  },
  {
    value: "Dezembro",
    label: "Dezembro",
  },
];

export function Combobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  console.log(value);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-center border border-borders"
        >
          {value
            ? months.find((framework) => framework.value === value)?.label
            : "Selecione um mês..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[358px] p-0 border border-borders bg-bg-input opacity-100"
        align="end"
      >
        <Command className="w-full">
          <CommandInput placeholder="Pesquisar mês..." />
          <CommandEmpty>Nenhum mês encontrado.</CommandEmpty>
          <CommandGroup className="w-full">
            <CommandList className="w-full">
              {months.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="hover:bg-stroke-container"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

import React from "react";
import HeadContent from "./head-content";
import TitleContent from "./title-content";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { CheckIcon, ChevronDown, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const StartUp = () => {
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const frameworks = [
    {
      value: "last-visit-page",
      label: "Last visit page",
      // onClick: () => setTheme("system"),
    },
    {
      value: "home",
      label: "Home",
      // onClick: () => setTheme("light"),
    },
    {
      value: "top-page-in-sidebar",
      label: "Top page in sidebar",
      // onClick: () => setTheme("dark"),
    },
  ];
  return (
    <div>
      <HeadContent label="Startup" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Open on start"
          subtitle="Choose what to show when Notion starts or when you switch workspaces."
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size={"lg"}
                className="px-2 text-sm font-normal h-7"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "User system setting"}
                <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] p-0" align="end">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <div key={framework.value} onClick={() => {}}>
                        <CommandItem
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                          className="cursor-pointer"
                        >
                          {framework.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      </div>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </TitleContent>
      </div>
    </div>
  );
};

export default StartUp;

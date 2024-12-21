import React from "react";
import { Repository } from "@/types/repository";
import { Badge } from "@/components/ui/badge";
import {
  FileIcon,
  RefreshCw,
  PlusCircle,
  Filter,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RepositoryListProps {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTechStack, setSelectedTechStack] = React.useState<
    string | null
  >(null);
  const [selectedRepo, setSelectedRepo] = React.useState<Repository | null>(
    null
  );

  const uniqueLanguages = Array.from(
    new Set(repositories.map((repo) => repo.language))
  ).filter(Boolean);

  const filteredRepositories = repositories.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTechStack =
      !selectedTechStack || repo.language === selectedTechStack;
    return matchesSearch && matchesTechStack;
  });

  return (
    <div className="p-6">
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-sm text-muted-foreground">
            {filteredRepositories.length} of {repositories.length} repositories
          </p>
        </div>
        <div className="flex gap-2 md:py-0 py-4">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh All
          </Button>
          <Button size="sm" className="bg-bgprimary">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Repository
          </Button>
        </div>
      </div>

      <div className="mb-6 flex gap-4 flex-row sm:flex-row justify-between">
        <Input
          type="search"
          placeholder="Search Repositories"
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedTechStack || "all"}
          onValueChange={(value) =>
            setSelectedTechStack(value === "all" ? null : value)
          }
        >
          <SelectTrigger className="w-auto">
            <Filter className="h-4 w-4 " />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {uniqueLanguages.map((language) => (
              <SelectItem key={language} value={language}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredRepositories.map((repo) => (
          <div
            key={repo.name}
            className="hover:bg-[#F5F5F5] flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg cursor-pointer"
            onClick={() => setSelectedRepo(repo)}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{repo.name}</h3>
                <Badge
                  variant={
                    repo.visibility === "Public" ? "secondary" : "outline"
                  }
                  className="bg-[#EFF8FF] font-light rounded-2xl text-[#175CD3]"
                >
                  {repo.visibility}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  {repo.language}
                  <span className="h-2 w-2 rounded-full bg-bgprimary" />
                </div>
                <div className="flex items-center gap-1">
                  <FileIcon className="h-4 w-4" />
                  {repo.size} KB
                </div>
                <div>Updated {repo.updatedAt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedRepo} onOpenChange={() => setSelectedRepo(null)}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span>{selectedRepo?.name}</span>
              <Badge
                variant={
                  selectedRepo?.visibility === "Public"
                    ? "secondary"
                    : "outline"
                }
                className="bg-[#EFF8FF] font-light rounded-2xl text-[#175CD3]"
              >
                {selectedRepo?.visibility}
              </Badge>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Repository Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  Language
                </div>
                <div className="flex items-center gap-2 font-medium">
                  {selectedRepo?.language}
                  <span className="h-2 w-2 rounded-full bg-bgprimary" />
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Size</div>
                <div className="font-medium">{selectedRepo?.size} KB</div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="border rounded-lg p-4 space-y-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Last Updated
                </div>
                <div className="font-medium">{selectedRepo?.updatedAt}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Repository URL
                </div>
                <Button
                  variant="outline"
                  className="w-full justify-between"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Visit Repository
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RepositoryList;

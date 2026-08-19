import { Link } from "react-router-dom";
import type { Project } from "../data/portfolio";
import { useLocale } from "../i18n/context";
import { Chip } from "./Chip";
import { ProjectStatusBadge } from "./ProjectStatusBadge";

interface ProjectCardProps {
  project: Project;
  /** широкая горизонтальная карточка для флагманского кейса */
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { t } = useLocale();

  if (featured) {
    return (
      <Link
        to={`/projects/${project.id}`}
        className="cell cell-solid cell-lift group grid overflow-hidden md:grid-cols-[1.15fr_1fr]"
      >
        <div className="relative min-h-[210px] md:min-h-[300px]">
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-surface-elevated max-md:bg-linear-to-t max-md:from-surface-elevated max-md:via-transparent max-md:to-transparent" />
        </div>
        <div className="flex flex-col gap-3.5 p-7 sm:p-8">
          <Chip
            label={`${t.projects.featured} · ${project.role.toLowerCase()}`}
            accent
            className="w-fit"
          />
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3.5">
              <img
                src={project.icon}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-xl border border-border object-cover"
              />
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                {project.title}
              </h3>
            </div>
            <ProjectStatusBadge status={project.status} />
          </div>
          <p className="text-sm leading-relaxed text-ink-muted">
            {project.shortDescription}
          </p>
          <div className="metric-divider mt-auto flex items-center justify-between gap-3 pt-3.5 text-[13.5px] text-accent">
            <span>{project.highlight}</span>
            <span className="whitespace-nowrap text-ink-dim transition group-hover:translate-x-1 group-hover:text-accent">
              {t.projects.openCase}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/projects/${project.id}`}
      className="cell cell-solid cell-lift group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <img
            src={project.icon}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-[34px] w-[34px] rounded-[9px] border border-border object-cover"
          />
          <h3 className="font-display min-w-0 truncate text-[15px] font-bold">
            {project.title}
          </h3>
          <ProjectStatusBadge status={project.status} className="ml-auto" />
        </div>
        <p className="text-[13px] leading-relaxed text-ink-muted">
          {project.shortDescription}
        </p>
        <div className="metric-divider mt-auto flex items-center justify-between gap-2.5 pt-3 text-[12.5px] text-accent">
          <span>{project.highlight}</span>
          <span className="text-ink-dim transition group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

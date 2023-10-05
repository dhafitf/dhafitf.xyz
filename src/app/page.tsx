import { projects, blogs } from "~/libs/dummies"
import CustomLink from "@/atoms/CustomLink"
import ProjectsList from "@/molecules/ProjectsList"
import BlogsList from "@/molecules/BlogsList"
import HeroSection from "@/organisms/HeroSection"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mb-4">
      <HeroSection />
      <div className="relative">
        <h3 className="text-2xl font-bold tracking-wider pb-6 text-white">Featured Projects</h3>
        <ProjectsList projects={projects} />
        <CustomLink
          href="/projects"
          className="px-4 py-2 flex items-center justify-center w-full mt-4 border-2 border-baseBg rounded-lg cursor-pointer text-sm hover:text-white hover:bg-baseBg"
        >
          View other projects
        </CustomLink>
      </div>
      <div className="relative">
        <h3 className="text-2xl font-bold tracking-wider pb-6 text-white">Blogs</h3>
        <BlogsList blogs={blogs} />
        <CustomLink
          href="/blogs"
          className="px-4 py-2 flex items-center justify-center w-full mt-4 border-2 border-baseBg rounded-lg cursor-pointer text-sm hover:text-white hover:bg-baseBg"
        >
          View other blogs
        </CustomLink>
      </div>
    </div>
  )
}
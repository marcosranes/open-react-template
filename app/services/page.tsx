import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Services() {
  return (
    <section className="relative fade-in">
      {/* Background Shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* Header Section */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Discover Our Comprehensive Services
            </h2>
            <p className="text-lg text-indigo-200/65">
              At Inventive4IT, we specialize in delivering innovative solutions
              designed to empower your business. From cloud services to project
              execution, we help you streamline processes, achieve milestones,
              and build lasting success.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 fade-in">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Cloud Services
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Secure and scalable cloud-based infrastructures tailored to meet
              your unique business needs.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Inventive AI™
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Unlock new standards of organizational efficiency with Inventive AI-powered solution.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              NOC & Environment Management
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Ensure operational excellence with proactive monitoring and
              management of your environment.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Server Migration
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Effortlessly migrate servers with minimal downtime and
              comprehensive support.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Information Security
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Protect your assets with advanced security solutions and
              compliance strategies.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Implementation & Administration of Kubernetes
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Harness the power of Kubernetes for efficient container
              orchestration.
            </p>
          </div>

          {/* Service Card 7 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Professional Services
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Leverage expert consulting and customized solutions for your
              business needs.
            </p>
          </div>

          {/* Service Card 8 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Service Management
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Streamline service delivery with tools to manage, track, and
              optimize operations.
            </p>
          </div>
          {/* Service Card 9 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Cloud Solutions
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Secure and scalable cloud-based infrastructures tailored to meet
              your unique business needs.
            </p>
          </div>

          {/* Service Card 10 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Project Milestones
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Simplify project tracking with advanced tools and team-focused
              workflows.
            </p>
          </div>

          {/* Service Card 11 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Advanced Security
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Comprehensive strategies to protect your systems and ensure
              compliance.
            </p>
          </div>

          {/* Service Card 12 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Strategic Initiatives
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              High-level consulting services to align your business goals with
              technological innovation.
            </p>
          </div>

          {/* Service Card 13 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Flexible Workflows
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Adaptable workflows designed to enhance team collaboration and
              efficiency.
            </p>
          </div>

          {/* Service Card 14 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-200">
              Unified Timeline
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Manage multiple projects with a single, streamlined timeline view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Fragment } from 'react'
import { Icon } from '../../ui/Icon'
import { Kicker } from '../../ui/Kicker'
import { serviceProcess } from '../../../content/servicesPage'

export function ProcessSteps() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <Kicker>{serviceProcess.kicker}</Kicker>
            <h2 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
              {serviceProcess.heading[0]}{' '}
              <span className="text-orange-500">{serviceProcess.heading[1]}</span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-ink-soft">{serviceProcess.body}</p>
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {serviceProcess.steps.map((step, i) => (
            <Fragment key={step.number}>
              <div className="flex items-center gap-4 sm:flex-col sm:gap-2 sm:text-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-mist text-orange-500">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <div>
                  <span className="block font-heading text-xs font-bold text-ink-faint">
                    {step.number}
                  </span>
                  <p className="mt-0.5 font-heading text-sm font-semibold text-ink sm:max-w-[8rem]">
                    {step.title}
                  </p>
                </div>
              </div>
              {i < serviceProcess.steps.length - 1 && (
                <Icon
                  name="arrow-right"
                  className="hidden h-4 w-4 shrink-0 text-line sm:block"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

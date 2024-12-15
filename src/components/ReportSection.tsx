import { createClient } from '@/lib/supabase/server'
import { getSessionRoles } from '@/actions/auth'
import { ReportCard } from './ReportCard'

export async function ReportSection() {
    const supabase = await createClient()

    const { data: { session } } = await supabase.auth.getSession()
    const { data: { user } } = await supabase.auth.getUser()
    const roles = await getSessionRoles(session)

    if (!user) {
        throw new Error("User not found")
    }

    const { data: reports, error } = await supabase
        .from('report')
        .select(`
          *,
          creator:users!report_creator_id_fkey(full_name),
          assignee:users!report_assignee_id_fkey(full_name)
        `)

    if (error) {
        throw error
    }

    const unsubmitted = reports.filter(a => a.status === 'DRAFT' && a.creator_id === user.id)
    const rejected = reports.filter(a => a.status === 'REJECTED' && a.creator_id === user.id)
    const waitingForReview = reports.filter(a => a.status === 'WAITING_FOR_REVIEW' && a.assignee_id === "")
    const inReview = reports.filter(a => a.status === 'WAITING_FOR_REVIEW' && a.assignee_id === user.id)
    const accepted = reports.filter(a => a.status === 'ACCEPTED' && a.creator_id === user.id)

    return (
        <div className="space-y-8">
            <ReportCard reports={unsubmitted} title="Unsubmitted Reports" />
            <ReportCard reports={rejected} title="Rejected Reports" />
            {roles.includes("moderator") && (
                <>
                    <ReportCard reports={waitingForReview} title="Waiting for Review" />
                    <ReportCard reports={inReview} title="Your current Reviews" />
                </>
            )}
            <ReportCard reports={accepted} title="Accepted Reports" />
        </div>
    )
}


